import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useLogin } from './hooks';

export type UserData = {
    username: string;
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    {t("회원이 아니신가요?")}{' '}
                    <Link to={'/account/register'} className="text-muted ms-1">
                        <b>{t('건민네 회원 가입')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Login = () => {
    const { t } = useTranslation();

    const { loading, userLoggedIn, user, error, schemaResolver, onSubmit, redirectUrl } = useLogin();

    return (
        <>
            {(userLoggedIn || user) && <Navigate to={redirectUrl} replace />}

            <AccountLayout bottomLinks={<BottomLink />}>
                <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold">{t('건민네 로그인')}</h4>
                    <p className="text-muted mb-4">
                        {t('아이디(이메일)과 암호를 입력하세요')}
                    </p>
                </div>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ username: 'test', password: 'test' }}
                >
                    <FormInput
                        label={t('Username')}
                        type="text"
                        name="아이디"
                        placeholder={t('회원 아이디(이메일)을 입력하세요.')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Password')}
                        type="password"
                        name="암호"
                        placeholder={t('로그인 암호를 입력하세요.')}
                        containerClass={'mb-3'}
                    >
                        <Link to="/account/forget-password" className="text-muted float-end">
                            <small>{t('로그인 암호를 잊었나요?')}</small>
                        </Link>
                    </FormInput>

                    <div className="mb-3 mb-0 text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('로그인')}
                        </Button>
                    </div>
                </VerticalForm>
            </AccountLayout>
        </>
    );
};

export default Login;
