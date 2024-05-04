import { NotificationItem, ProfileOption, SearchOption } from '../types';
import avatar1 from 'assets/images/users/avatar-1.jpg';
import avatar2 from 'assets/images/users/avatar-2.jpg';
import avatar5 from 'assets/images/users/avatar-5.jpg';

// get the notifications
const notifications: NotificationItem[] = [
    {
        day: '오늘',
        messages: [
            {
                id: 1,
                title: '건민네 사이트 개발',
                subText: '건민네 사이트 개발 5월 1주차 회의',
                time: '7시간 남음',
                icon: 'mdi mdi-comment-account-outline',
                variant: 'primary',
                isRead: false,
            },
            {
                id: 2,
                title: '관리자',
                subText: '신규 회원 가입',
                time: '1시간 전',
                icon: 'mdi mdi-account-plus',
                variant: 'info',
                isRead: true,
            },
        ],
    },
    {
        day: '어제',
        messages: [
            {
                id: 1,
                title: '추미애 - 리뷰어 회의',
                subText: '국회의장 후보자 평가 리뷰어 회의',
                time: '1일 전',
                avatar: avatar1,
                isRead: true,
            },
        ],
    },
    {
        day: '2024년 5월 1일',
        messages: [
            {
                id: 1,
                title: 'Datacorp',
                subText: 'Caleb Flakelar commented on Admin',
                icon: 'mdi mdi-comment-account-outline',
                variant: 'primary',
                isRead: true,
            },
            {
                id: 2,
                title: 'Karen Robinson',
                subText: 'Wow ! this admin looks good and awesome design',
                avatar: avatar2,
                isRead: true,
            },
        ],
    },
];

// get the profilemenu
const profileMenus: ProfileOption[] = [
    {
        label: '내 계정',
        icon: 'mdi mdi-account-circle',
        redirectTo: '#',
    },
    {
        label: '설정',
        icon: 'mdi mdi-account-edit',
        redirectTo: '#',
    },
    {
        label: '지원',
        icon: 'mdi mdi-lifebuoy',
        redirectTo: '#',
    },
    {
        label: '화면잠금',
        icon: 'mdi mdi-lock-outline',
        redirectTo: '/account/lock-screen',
    },
    {
        label: '로그아웃',
        icon: 'mdi mdi-logout',
        redirectTo: '/account/logout',
    },
];

const searchOptions: SearchOption[] = [
    { value: '1', label: '평가 보고서', icon: 'uil-notes', type: 'report' },
    { value: '2', label: '프로젝트', icon: 'uil-life-ring', type: 'help' },
    { value: '3', label: '자료', icon: 'uil-cog', type: 'settings' },
    {
        label: '임걱정',
        value: 'users1',
        type: 'users',
        userDetails: {
            firstname: '걱정',
            lastname: '임',
            position: '리뷰어',
            avatar: avatar2,
        },
    },
    {
        label: '홍길동',
        value: 'users2',
        type: 'users',
        userDetails: {
            firstname: '길동',
            lastname: '홍',
            position: '리뷰어',
            avatar: avatar5,
        },
    },
];

export { notifications, profileMenus, searchOptions };
