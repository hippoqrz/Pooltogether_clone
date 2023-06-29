import classNames from 'classnames'

export interface LogoProps {
  className?: string
  smLogoClassName?: string
  mdLogoClassName?: string
}

export const Logo = (props: LogoProps) => {
  const { className, smLogoClassName, mdLogoClassName } = props

  return (
    <>
      <svg
        className={classNames('w-[21px] h-auto md:hidden', className, smLogoClassName)}
        viewBox='0 0 21 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.4497 0C16.2141 0 20.8871 4.75102 20.8871 10.6117V16.7134C20.8871 22.5741 16.2141 27.3251 10.4497 27.3251C9.54422 27.3251 8.66568 27.2079 7.82796 26.9875L7.82806 27.7079C7.82806 31.9952 4.39307 35.4789 0.129455 35.5481L0 35.5492V12.2035L0.011963 12.2032L0.0122811 10.6117C0.0122811 4.75102 4.68527 0 10.4497 0ZM10.4497 7.95877C9.00859 7.95877 7.84034 9.14652 7.84034 10.6117V16.7134C7.84034 18.1786 9.00859 19.3663 10.4497 19.3663C11.8908 19.3663 13.0591 18.1786 13.0591 16.7134V10.6117C13.0591 9.14652 11.8908 7.95877 10.4497 7.95877Z'
          fill='white'
        />
      </svg>
      <svg
        className={classNames('w-[101px] h-auto hidden md:block', className, mdLogoClassName)}
        viewBox='0 0 101 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.25928 8.95701C4.19688 8.36694 4.50191 8.30204 4.66223 8.34335C4.66223 8.34335 7.31386 9.49317 12.6105 9.58572C17.9072 9.67826 20.8229 8.37794 20.8229 8.37794C20.9834 8.33731 21.2881 8.40352 21.2221 8.99332C21.1562 9.58312 21.0548 11.2872 21.0123 12.0655L24.0607 12.072C24.4351 12.0592 25.127 12.2791 24.8994 13.2619C24.8531 13.4618 24.7851 13.8038 24.6979 14.2429C24.2489 16.5019 23.2894 21.3301 22.1438 22.5967C21.3386 23.5783 20.2541 24.0675 19.4112 24.2706C18.709 24.484 17.9769 24.4468 17.7238 24.4339L17.7237 24.4339C17.6874 24.4321 17.661 24.4307 17.6459 24.4307C17.0817 25.2898 15.6402 27.1467 14.3871 27.7012C13.9786 27.8518 13.9817 28.0034 13.9842 28.1226C13.9844 28.1322 13.9846 28.1417 13.9846 28.151C14.0481 29.2572 14.3188 31.7323 14.8932 32.7823C14.9694 32.9391 14.9907 33.0583 15.0054 33.1401C15.0214 33.2295 15.0294 33.2742 15.0923 33.2743L15.8543 33.276C15.9346 33.2762 16.1271 33.2766 16.255 33.4407C16.3233 33.5284 16.4432 33.5264 16.5738 33.5242C16.7485 33.5212 16.9421 33.5179 17.0563 33.7292C17.1785 33.9554 17.1529 34.197 17.1397 34.3216C17.1369 34.3487 17.1346 34.3702 17.1345 34.3849L18.3378 34.3874C18.4849 34.3878 18.7788 34.4621 18.7779 34.7571L18.7705 37.2152C18.7704 37.26 18.7672 37.2966 18.7646 37.3265C18.753 37.4609 18.753 37.4609 19.0907 37.4617L20.1335 37.4639C20.2005 37.464 20.3341 37.4725 20.333 37.833L20.3296 38.9392C20.3294 39.0211 20.3289 39.185 19.9679 39.1842L5.33145 39.1529C4.97046 39.1521 4.97095 38.9882 4.9712 38.9063L4.97453 37.8002C4.97562 37.4397 5.10925 37.4317 5.17619 37.4319L6.21906 37.4341C6.5567 37.4348 6.5567 37.4348 6.5459 37.3004L6.5459 37.3003L6.5459 37.3003C6.54349 37.2704 6.54055 37.2338 6.54068 37.189L6.54809 34.7309C6.54898 34.4359 6.84334 34.3628 6.99041 34.3632L8.19372 34.3657C8.19376 34.3511 8.19161 34.3295 8.18891 34.3024C8.17647 34.1778 8.15234 33.9361 8.27592 33.7104C8.39135 33.4996 8.58498 33.5037 8.75967 33.5075C8.89018 33.5102 9.01012 33.5128 9.07899 33.4254C9.20783 33.2618 9.40036 33.2622 9.48058 33.2623L10.2427 33.264C10.3055 33.2641 10.3138 33.2194 10.3304 33.1301C10.3455 33.0483 10.3676 32.9292 10.4447 32.7728C11.0255 31.7252 11.311 29.2514 11.3812 28.1454C11.3812 28.1362 11.3815 28.1267 11.3817 28.1171L11.3817 28.117C11.385 27.9978 11.389 27.8463 10.9815 27.6939C9.7317 27.134 8.30136 25.271 7.74241 24.4095C7.7274 24.4095 7.70114 24.4107 7.66511 24.4123L7.66492 24.4124L7.66454 24.4124L7.66451 24.4124C7.41128 24.4242 6.67895 24.4583 5.97805 24.2418C5.13636 24.0352 4.05487 23.5413 3.25563 22.5563C2.11765 21.2847 1.18722 16.4525 0.751908 14.1916C0.667294 13.7522 0.601386 13.4099 0.556296 13.2098C0.334642 12.2261 1.02787 12.0091 1.40219 12.0235L4.45056 12.03C4.4128 11.2516 4.32167 9.54709 4.25928 8.95701ZM2.22254 13.3929C1.7536 13.3847 1.86461 13.9446 1.94907 14.3707C1.96003 14.426 1.97055 14.479 1.97929 14.5282C2.05538 14.9569 2.409 16.7238 3.34049 19.5663C4.27197 22.4088 6.07581 22.6151 6.8613 22.3629C6.32446 21.1759 5.19236 17.3764 4.96458 16.0619C4.73681 14.7474 4.45329 13.4319 4.11868 13.426L2.22254 13.3929ZM23.4785 14.5322C23.5708 14.1077 23.692 13.5497 23.223 13.5499L21.3266 13.5505C20.9919 13.5506 20.6843 14.8611 20.4325 16.1715C20.1807 17.482 18.9791 21.2615 18.4206 22.4391C19.2013 22.7047 21.0086 22.5293 21.9921 19.7032C22.9755 16.8771 23.3615 15.1165 23.4454 14.6892C23.4551 14.6401 23.4666 14.5873 23.4785 14.5322L23.4785 14.5322ZM15.4299 18.9407L12.6945 20.6992L9.97331 18.9234L12.6851 22.9647L12.6851 22.9658L12.6854 22.9653L12.6858 22.9658L12.6858 22.9647L15.4299 18.9407ZM12.7261 12.9914L12.7261 12.9888L12.7254 12.9901L12.7247 12.9888L12.7247 12.9914L9.96025 17.812L12.6983 19.5655L12.6983 19.5665L12.6991 19.566L12.6998 19.5664L12.6998 19.5655L15.4519 17.8294L12.7261 12.9914Z'
          fill='#FFB636'
        />
        <path
          d='M21.1071 8.46749C21.0999 9.25545 17.3708 9.86235 12.7778 9.82305C8.18483 9.78374 4.35572 9.11116 4.36293 8.32319C4.37014 7.53523 8.21093 6.93028 12.8039 6.96959C17.3969 7.00889 21.1144 7.67953 21.1071 8.46749Z'
          fill='#FFD469'
        />
        <path
          d='M18.6977 11.274C19.1076 11.2739 19.1808 11.2739 19.9242 11.0078C19.8317 11.5131 19.3446 15.3424 19.1779 15.9434C18.7322 17.5493 18.2284 20.0311 17.5771 20.5109C17.4533 20.602 16.9082 20.5111 16.7053 20.3776C16.5024 20.2441 17.2065 18.8673 18.063 15.9438C18.5481 12.7926 18.4003 11.426 18.6977 11.274Z'
          fill='#FFCC4E'
        />
        <path
          d='M40.9025 7.24056C45.9728 7.24056 50.0832 11.5044 50.0832 16.764V22.2401C50.0832 27.4997 45.9728 31.7635 40.9025 31.7635C40.106 31.7635 39.3333 31.6583 38.5964 31.4606L38.5965 32.1071C38.5965 35.9547 35.5751 39.0812 31.8248 39.1433L31.7109 39.1443V18.1926L31.7215 18.1923L31.7217 16.764C31.7217 11.5044 35.8321 7.24056 40.9025 7.24056ZM82.0159 7.24056C87.0892 7.24056 91.202 11.5287 91.202 16.8185V22.3258C91.202 27.6155 87.0892 31.9037 82.0159 31.9037C76.9425 31.9037 72.8298 27.6155 72.8298 22.3258V16.8185C72.8298 11.5287 76.9425 7.24056 82.0159 7.24056ZM61.4565 6.78802C66.5298 6.78802 70.6426 11.0762 70.6426 16.3659V21.8732C70.6426 27.163 66.5298 31.4512 61.4565 31.4512C56.3831 31.4512 52.2704 27.163 52.2704 21.8732V16.3659C52.2704 11.0762 56.3831 6.78802 61.4565 6.78802ZM100.388 0V24.2981C100.388 28.2091 97.317 31.387 93.5049 31.4502L93.3892 31.4512V7.15311C93.3892 3.20256 96.5227 0 100.388 0ZM82.0159 14.424C80.7476 14.424 79.7194 15.496 79.7194 16.8185V22.3258C79.7194 23.6482 80.7476 24.7203 82.0159 24.7203C83.2842 24.7203 84.3124 23.6482 84.3124 22.3258V16.8185C84.3124 15.496 83.2842 14.424 82.0159 14.424ZM40.9025 14.3832C39.6349 14.3832 38.6073 15.4491 38.6073 16.764V22.2401C38.6073 23.555 39.6349 24.6209 40.9025 24.6209C42.1701 24.6209 43.1976 23.555 43.1976 22.2401V16.764C43.1976 15.4491 42.1701 14.3832 40.9025 14.3832ZM61.4565 13.9715C60.1881 13.9715 59.16 15.0435 59.16 16.3659V21.8732C59.16 23.1957 60.1881 24.2677 61.4565 24.2677C62.7248 24.2677 63.753 23.1957 63.753 21.8732V16.3659C63.753 15.0435 62.7248 13.9715 61.4565 13.9715Z'
          fill='white'
        />
        <path
          d='M74.6793 37.9972H74.4883C74.2985 37.9972 74.1317 37.8158 74.1317 37.5334V36.199H74.5389C74.7285 36.199 74.8731 36.071 74.8731 35.8889C74.8731 35.7969 74.8395 35.715 74.7779 35.6564C74.7167 35.5981 74.6327 35.5674 74.5389 35.5674H74.1317V34.8191C74.1317 34.6148 73.9823 34.4635 73.7806 34.4635C73.579 34.4635 73.4296 34.6148 73.4296 34.8191V35.5674H73.2414C73.1476 35.5674 73.0636 35.5981 73.0024 35.6564C72.9408 35.715 72.9072 35.7969 72.9072 35.8889C72.9072 36.071 73.0518 36.199 73.2414 36.199H73.4296V37.5334C73.4296 38.1978 73.8818 38.7085 74.4883 38.7085H74.5894C74.8077 38.7085 74.991 38.5679 74.991 38.3528C74.991 38.1579 74.8615 37.9972 74.6793 37.9972Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M78.9136 37.0839L78.9136 37.0834C78.9078 36.1179 78.2372 35.4308 77.2988 35.4308C76.8267 35.4308 76.4207 35.6009 76.1326 35.895C75.8446 36.1891 75.6784 36.6031 75.6784 37.0839C75.6784 37.5619 75.8446 37.9745 76.1327 38.2678C76.4208 38.5612 76.8267 38.7312 77.2988 38.7312C77.7681 38.7312 78.1727 38.5611 78.46 38.2678C78.7473 37.9745 78.9136 37.5619 78.9136 37.0839ZM77.2988 36.0852C77.5725 36.0852 77.8022 36.1888 77.9638 36.363C78.1256 36.5374 78.2227 36.7868 78.2227 37.0839C78.2227 37.3809 78.1256 37.6287 77.9639 37.8017C77.8025 37.9745 77.5728 38.0768 77.2988 38.0768C77.0247 38.0768 76.7935 37.9744 76.6306 37.8015C76.4675 37.6284 76.3692 37.3807 76.3692 37.0839C76.3692 36.4936 76.7569 36.0852 77.2988 36.0852Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M81.3586 40.0002C80.8061 40.0002 80.302 39.7759 79.9671 39.3477C79.9049 39.2704 79.8815 39.1802 79.8965 39.0938C79.9114 39.008 79.9629 38.9323 80.0384 38.8801L80.039 38.8797C80.2072 38.7661 80.4107 38.8173 80.5211 38.9637C80.7083 39.2058 80.9955 39.3458 81.3698 39.3458C81.6218 39.3458 81.8514 39.2517 82.0182 39.0735C82.185 38.8954 82.2938 38.628 82.2938 38.2732V38.228C82.0456 38.545 81.6845 38.7312 81.2575 38.7312C80.8174 38.7312 80.439 38.5599 80.171 38.2659C79.9034 37.9724 79.7494 37.5604 79.7494 37.0839C79.7494 36.6031 79.9156 36.1891 80.2037 35.895C80.4918 35.6009 80.8978 35.4308 81.3698 35.4308C82.3082 35.4308 82.9788 36.1179 82.9847 37.0834L82.9847 37.0839L82.9847 38.313C82.9847 39.2479 82.3218 40.0002 81.3586 40.0002ZM81.3698 38.0768C81.0958 38.0768 80.8646 37.9744 80.7017 37.8015C80.5386 37.6284 80.4403 37.3807 80.4403 37.0839C80.4403 36.4936 80.828 36.0852 81.3698 36.0852C81.6436 36.0852 81.8733 36.1888 82.0348 36.363C82.1967 36.5374 82.2938 36.7868 82.2938 37.0839C82.2938 37.3809 82.1967 37.6287 82.035 37.8017C81.8736 37.9745 81.6439 38.0768 81.3698 38.0768Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M86.5415 37.8939C86.418 37.7909 86.2359 37.7951 86.101 37.8975C85.9606 38.0028 85.7056 38.0996 85.4914 38.0996C84.9821 38.0996 84.6061 37.7969 84.4989 37.3542H86.5474C86.639 37.3542 86.7217 37.323 86.7819 37.2648C86.8424 37.2063 86.876 37.1247 86.876 37.0327C86.876 36.5695 86.7413 36.1686 86.4872 35.8826C86.2324 35.5957 85.863 35.4308 85.4072 35.4308C84.9458 35.4308 84.5481 35.6013 84.2658 35.8955C83.9836 36.1897 83.8205 36.6035 83.8205 37.0839C83.8205 37.5627 83.9929 37.9755 84.2904 38.2687C84.5877 38.5617 85.006 38.7312 85.4914 38.7312C85.8485 38.7312 86.2853 38.5844 86.5515 38.3689C86.6285 38.3084 86.6704 38.2251 86.6674 38.135C86.6645 38.0461 86.6186 37.9618 86.5429 37.8951L86.5415 37.8939ZM85.4072 36.0625C85.643 36.0625 85.8285 36.1429 85.9632 36.2768C86.0827 36.3956 86.1658 36.5601 86.2057 36.7567H84.505C84.553 36.5599 84.6475 36.3961 84.7821 36.2776C84.9348 36.143 85.1439 36.0625 85.4072 36.0625Z'
          fill='white'
        />
        <path
          d='M89.126 37.9972H88.935C88.7452 37.9972 88.5784 37.8158 88.5784 37.5334V36.199H88.9856C89.1752 36.199 89.3198 36.071 89.3198 35.8889C89.3198 35.7969 89.2862 35.715 89.2246 35.6564C89.1634 35.5981 89.0794 35.5674 88.9856 35.5674H88.5784V34.8191C88.5784 34.6148 88.429 34.4635 88.2273 34.4635C88.0257 34.4635 87.8763 34.6148 87.8763 34.8191V35.5674H87.6881C87.5943 35.5674 87.5103 35.5981 87.4491 35.6564C87.3875 35.715 87.3539 35.7969 87.3539 35.8889C87.3539 36.071 87.4985 36.199 87.6881 36.199H87.8763V37.5334C87.8763 38.1978 88.3285 38.7085 88.935 38.7085H89.0361C89.2544 38.7085 89.4377 38.5679 89.4377 38.3528C89.4377 38.1579 89.3082 37.9972 89.126 37.9972Z'
          fill='white'
        />
        <path
          d='M91.8803 35.4252C91.5411 35.4252 91.2337 35.5326 90.9956 35.7201V34.4834C90.9956 34.381 90.96 34.2898 90.895 34.224C90.8301 34.1582 90.7401 34.1221 90.639 34.1221C90.5379 34.1221 90.4479 34.1582 90.3829 34.224C90.318 34.2898 90.2823 34.381 90.2823 34.4834V38.3528C90.2823 38.4552 90.318 38.5464 90.3829 38.6122C90.4479 38.678 90.5379 38.7141 90.639 38.7141C90.7401 38.7141 90.8301 38.678 90.895 38.6122C90.96 38.5464 90.9956 38.4552 90.9956 38.3528V36.7481C90.9956 36.3824 91.3183 36.0909 91.768 36.0909C92.0109 36.0909 92.215 36.1598 92.3579 36.2969C92.5001 36.4333 92.5908 36.6461 92.5908 36.953V38.3528C92.5908 38.5571 92.7458 38.7141 92.9475 38.7141C93.1491 38.7141 93.3041 38.5571 93.3041 38.3528V36.953C93.3041 36.4655 93.1531 36.082 92.8954 35.8202C92.6379 35.5586 92.2805 35.4252 91.8803 35.4252Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M96.9669 37.3542H94.9184C95.0257 37.7969 95.4016 38.0996 95.911 38.0996C96.1252 38.0996 96.3802 38.0027 96.5206 37.8974C96.6555 37.7951 96.8375 37.7909 96.961 37.8939L96.9624 37.8951C97.0381 37.9618 97.0841 38.0461 97.0869 38.135C97.0899 38.2252 97.048 38.3084 96.971 38.3689C96.7048 38.5844 96.268 38.7312 95.911 38.7312C95.4255 38.7312 95.0072 38.5617 94.7099 38.2687C94.4124 37.9755 94.24 37.5627 94.24 37.0839C94.24 36.6035 94.4031 36.1897 94.6853 35.8955C94.9676 35.6013 95.3654 35.4308 95.8267 35.4308C96.2825 35.4308 96.6519 35.5957 96.9068 35.8826C97.1609 36.1686 97.2955 36.5695 97.2955 37.0327C97.2955 37.1247 97.2619 37.2063 97.2014 37.2648C97.1412 37.323 97.0585 37.3542 96.9669 37.3542ZM95.8267 36.0625C96.0625 36.0625 96.248 36.1429 96.3828 36.2768C96.5023 36.3956 96.5853 36.5601 96.6253 36.7567H94.9245C94.9725 36.5599 95.0671 36.3961 95.2016 36.2776C95.3543 36.143 95.5634 36.0625 95.8267 36.0625Z'
          fill='white'
        />
        <path
          d='M99.7421 35.4195C99.4074 35.4195 99.0973 35.5433 98.8655 35.7488C98.8567 35.6687 98.8292 35.5989 98.7772 35.5463C98.7127 35.4808 98.6217 35.4536 98.5177 35.4536C98.4149 35.4536 98.3247 35.4831 98.2602 35.5484C98.1958 35.6137 98.1666 35.7051 98.1666 35.8092V38.3528C98.1666 38.4593 98.1955 38.5512 98.2606 38.6162C98.3255 38.681 98.4159 38.7085 98.5177 38.7085C98.6228 38.7085 98.7135 38.6792 98.7776 38.6133C98.8416 38.5475 98.8687 38.4559 98.8687 38.3528V36.6912C98.8687 36.4591 98.9875 36.283 99.1925 36.1779C99.4004 36.0712 99.699 36.0376 100.048 36.1064C100.13 36.1255 100.215 36.1243 100.288 36.0878C100.363 36.05 100.416 35.9798 100.439 35.8834C100.456 35.8166 100.45 35.7504 100.421 35.69C100.392 35.6304 100.343 35.5807 100.281 35.5413C100.159 35.4632 99.9738 35.4195 99.7421 35.4195Z'
          fill='white'
        />
      </svg>
    </>
  )
}
