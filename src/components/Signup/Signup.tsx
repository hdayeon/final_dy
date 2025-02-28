import React, { useEffect, useRef, useState } from 'react'
import * as ST from './style'
import { useNavigate } from 'react-router-dom'
import instance from '../../apis/instance'
import Timer from './Timer'

export interface UserData {
    nickname: string
    phoneNumber: string
    email: string
    password: string
}

const Signup: React.FC = () => {
    const navigate = useNavigate()
    // 인증코드 전송 후 로딩 중 안내
    const [loading, setLoading] = useState(false)

    const [code, setCode] = useState('')
    // 인증코드 5분 타이머 컨트롤
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
    // 타이머를 강제로 다시 렌더링하기 위한 키
    const [timerKey, setTimerKey] = useState<number>(0)
    // 이메일 인증 후 관련 input창 비활성화 컨트롤
    const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false)

    const [userData, setUserData] = useState<UserData>({
        nickname: '',
        phoneNumber: '',
        email: '',
        password: '',
    })

    const nickRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (nickRef.current) {
            nickRef.current.focus()
        }
    }, [])

    const emailVerify = async (email: UserData['email']) => {
        // email 형식 유효성 (정규식)
        const emailEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i
        if (emailEx.test(email)) {
            try {
                setLoading(true)
                await instance.post('/api/user/email', { email })
                alert('이메일로 인증코드가 발송되었습니다.')
                setIsTimerRunning(true)
                // 키 변경해서 타이머 재시작(코드 발송될 때마다)
                setTimerKey((prevKey) => prevKey + 1)
            } catch (err: any) {
                console.log('이메일 전송에러 :', err)
                alert(err.response.data.message)
            } finally {
                setLoading(false)
            }
        } else {
            alert('이메일 형식이 맞지 않습니다.')
        }
    }

    const codeVerify = async (email: string, verificationCode: string) => {
        try {
            await instance.post('/api/user/email/verify', { email, verificationCode })
            alert('이메일이 인증되었습니다.')
            setIsTimerRunning(false)
            setIsEmailVerified(true)
        } catch (err) {
            console.log('이메일 인증코드 전송에러 :', err)
            alert('인증 코드가 맞지 않습니다.')
        }
    }

    const userSignup = async (userData: UserData) => {
        try {
            await instance.post('/api/user/signup', userData)
            alert('회원가입이 완료되었습니다🐕')
            navigate('/login')
        } catch (err: any) {
            console.log('회원가입 error 메세지', err)
            alert(err.response.data.message)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSignUp = async () => {
        // 비밀번호 유효성 검사
        const num = userData.password.search(/[0-9]/g)
        const eng = userData.password.search(/[a-z]/gi)

        if (!code || !userData.nickname || !userData.phoneNumber || !userData.email || !userData.password) {
            alert('정보를 모두 입력해주세요😺')
            return false

            // 비밀번호 유효성
        } else if (userData.password.length < 4 || userData.password.length > 12) {
            alert('비밀번호는 4자리 ~ 12자리로 입력해주세요.')
            return false
        } else if (userData.password.search(/\s/) != -1) {
            alert('비밀번호는 공백 없이 입력해주세요.')
            return false
        } else if (num < 0 || eng < 0) {
            alert('숫자, 영문을 혼합하여 입력해주세요.')
            return false
        } else if (userData.nickname.length < 1 || userData.nickname.length > 10) {
            alert('닉네임은 1~10자로 입력해주세요.')
            return false
        } else if (userData.phoneNumber.length < 10 || userData.phoneNumber.length > 11) {
            alert('전화번호는 10~11자리로 입력해주세요.')
            return false
        } else {
            console.log('비번 유효성 통과')
            await userSignup(userData)

            return true
        }
        // console.log('회원가입 정보:', userData)
    }

    return (
        <ST.SignupContainer>
            <ST.SignupBox>
                <ST.SignupTitleH2>회원가입</ST.SignupTitleH2>
                <ST.SignupP>간단한 정보 입력으로 회원가입하고 더 많은 서비스를 즐겨보세요!</ST.SignupP>
                <ST.SignupForm onSubmit={(e) => e.preventDefault()}>
                    <ST.SignupInputBox>
                        <ST.SignupLabel>이메일 </ST.SignupLabel>
                        <ST.SignupInput
                            type="text"
                            id="email"
                            placeholder="이메일을 입력해주세요"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            disabled={isEmailVerified} // 인증 후 비활성화
                        />
                    </ST.SignupInputBox>

                    <ST.SignupEBtn
                        onClick={() => emailVerify(userData.email)}
                        disabled={isEmailVerified}
                        style={{ color: isEmailVerified ? '#fff' : '#00bd8f' }}
                    >
                        {loading ? '인증코드 전송 중...' : '인증코드 발송'}
                    </ST.SignupEBtn>

                    <ST.VerifyBox>
                        <ST.SignupInputDiv>
                            <ST.SignupCodeInput
                                type="text"
                                placeholder="인증코드를 입력해주세요"
                                name="code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                disabled={isEmailVerified} // 인증 후 비활성화
                            />
                            {isTimerRunning && <Timer key={timerKey} mm={'5'} ss={'0'} isRunning={isTimerRunning} />}
                        </ST.SignupInputDiv>
                        <ST.ComfirmBtn
                            onClick={() => codeVerify(userData.email, code)}
                            disabled={isEmailVerified}
                            style={{ color: isEmailVerified ? '#fff' : '#00bd8f' }}
                        >
                            확인
                        </ST.ComfirmBtn>
                    </ST.VerifyBox>

                    <ST.SignupInputBox>
                        <ST.SignupLabel>비밀번호 </ST.SignupLabel>
                        <ST.SignupInput
                            type="password"
                            id="password"
                            placeholder="숫자, 영문 조합 4 ~ 12자"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                    </ST.SignupInputBox>

                    <ST.SignupInputBox>
                        <ST.SignupLabel>닉네임 </ST.SignupLabel>
                        <ST.SignupInput
                            type="text"
                            id="nickname"
                            ref={nickRef}
                            placeholder="닉네임을 입력해주세요"
                            name="nickname"
                            value={userData.nickname}
                            onChange={handleInputChange}
                        />
                    </ST.SignupInputBox>

                    <ST.SignupInputBox>
                        <ST.SignupLabel>전화번호 </ST.SignupLabel>
                        <ST.SignupInput
                            type="text"
                            id="phoneNumber"
                            placeholder="전화번호를 입력해주세요 ( &#039;-&#039; 구분없이 )"
                            name="phoneNumber"
                            value={userData.phoneNumber}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSignUp
                                }
                            }}
                        />
                    </ST.SignupInputBox>

                    <ST.SignupBtn type="button" onClick={handleSignUp}>
                        가입하기
                    </ST.SignupBtn>
                </ST.SignupForm>
                <ST.SignupP>
                    이미 회원이신가요 ?
                    <ST.SignupSpan onClick={() => navigate('/login')}> 로그인하러 가기</ST.SignupSpan>
                </ST.SignupP>
            </ST.SignupBox>
        </ST.SignupContainer>
    )
}

export default Signup
