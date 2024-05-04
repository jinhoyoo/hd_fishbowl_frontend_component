import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useForgetPassword } from './hooks';

export type UserData = {
    username: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">                    
                    <Link to={'/account/login'} className="text-muted ms-1">
                        <b>{t('로그인 화면')}</b>
                    </Link>
					{t('으로 가기')}{' '}
                </p>
            </Col>
        </Row>
    );
};

const ForgetPassword = () => {
    const { t } = useTranslation();
    const { loading, passwordReset, resetPasswordSuccess, error, schemaResolver, onSubmit } = useForgetPassword();

    return (
        <AccountLayout bottomLinks={<BottomLink />}>
            <div className="text-center m-auto">
                <h4 className="text-dark-50 text-center mt-0 font-weight-bold">{t('새로운 암호 등록')}</h4>
                <p className="text-muted mb-4">
                    {t("등록된 이메일 주소를 입력하세요, 새로운 암호로 변경하기위한 절차를 이메일로 발송드립니다.")}
                </p>
            </div>

            {resetPasswordSuccess && <Alert variant="success">{resetPasswordSuccess.message}</Alert>}

            {error && !resetPasswordSuccess && (
                <Alert variant="danger" className="my-2">
                    {error}
                </Alert>
            )}

            {!passwordReset && (
                <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
                    <FormInput
                        label={t('등록 이메일 주소')}
                        type="text"
                        name="username"
                        placeholder={t('등록된 이메일 주소를 입력하세요.')}
                        containerClass={'mb-3'}
                    />

                    <div className="mb-3 mb-0 text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('제출')}
                        </Button>
                    </div>
                </VerticalForm>
            )}
        </AccountLayout>
    );
};

export default ForgetPassword;
