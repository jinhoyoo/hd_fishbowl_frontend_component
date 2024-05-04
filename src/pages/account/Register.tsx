import { Navigate, Link } from 'react-router-dom';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useRegister } from './hooks';

export type UserData = {
    fullname: string;
    email: string;
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    {t('이미 회원으로 등록되었나요?')}{' '}
                    <Link to={'/account/login'} className="text-muted ms-1">
                        <b>{t('로그인')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Register = () => {
    const { t } = useTranslation();
    const { loading, userSignUp, error, schemaResolver, onSubmit } = useRegister();

    return (
        <>
            {userSignUp ? <Navigate to={'/account/confirm'}></Navigate> : null}

            <AccountLayout bottomLinks={<BottomLink />}>
                <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold">{t('건민네 계정 신청')}</h4>
                    <p className="text-muted mb-4">
                        {t("회원 계정이 없습니까? 새로운 계정을 신청합니다.")}
                    </p>
                </div>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver} defaultValues={{}}>
					<FormInput
                        label={t('유투브 아이디')}
                        type="text"
                        name="youtubeid"
                        placeholder={t('유튜브 아이디를 입력하세요.')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('이름')}
                        type="text"
                        name="fullname"
                        placeholder={t('이름을 입력하세요.')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('이메일 주소')}
                        type="email"
                        name="email"
                        placeholder={t('이메일 주소를 입력하세요.')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('암호')}
                        type="password"
                        name="password"
                        placeholder={t('암호를 입력하세요.')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('이용 약관에 동의 합니다.')}
                        type="checkbox"
                        name="checkboxsignup"
                        containerClass={'mb-3 text-muted'}
                    />

                    <div className="mb-3 mb-0 text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('건민네 계정 신청')}
                        </Button>
                    </div>
                </VerticalForm>
            </AccountLayout>
        </>
    );
};

export default Register;
