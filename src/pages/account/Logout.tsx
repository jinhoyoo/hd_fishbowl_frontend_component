import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import AccountLayout from './AccountLayout';
import logoutIcon from 'assets/images/logout-icon.svg';
import { useLogout } from './hooks';

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">                    
                    <Link to={'/account/login'} className="text-muted ms-1">
                        <b>{t('로그인')}</b>
                    </Link>
					{t(' 화면으로 돌아가기')}{' '}
                </p>
            </Col>
        </Row>
    );
};

const Logout = () => {
    const { t } = useTranslation();
    useLogout();

    return (
        <AccountLayout bottomLinks={<BottomLink />}>
            <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center mt-0 fw-bold">{t('다음에 또 방문해주세요 !')}</h4>
                <p className="text-muted mb-4">{t('건민네로부터 로그아웃 되었습니다..')}</p>

                <div className="logout-icon m-auto">
                    <img src={logoutIcon} alt="" />
                </div>
            </div>
        </AccountLayout>
    );
};

export default Logout;
