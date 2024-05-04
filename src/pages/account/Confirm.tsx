import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AccountLayout from './AccountLayout';
import mailSent from 'assets/images/mail_sent.svg';

const Confirm = () => {
    const { t } = useTranslation();

    return (
        <AccountLayout>
            <div className="text-center m-auto">
                <img src={mailSent} alt="메일 발송" height="64" />
                <h4 className="text-dark-50 text-center mt-4 fw-bold">{t('이멩일을 확인해 주세요.')}</h4>
                <p className="text-muted mb-4">
                    {t(
                        '새로운 암호로 변경하기 위한 절차를 <b>youremail@domain.com</b>로 발송하였습니다. 이메일의 <b>암호 변경</b> 링크를 클릭하세요.'
                    )}
                </p>
                <p className="text-center">
                    <Link className="btn btn-primary" to="/account/login">
                        {t('로그인')}
                    </Link>
					{t(' 화면으로 가기')}
                </p>
            </div>
        </AccountLayout>
    );
};

export default Confirm;
