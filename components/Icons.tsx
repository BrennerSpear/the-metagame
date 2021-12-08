import { Icon, Link } from '@chakra-ui/react';
import React from 'react';

import { BIRTHBLOCK_CONTRACT_ADDRESS, networkStrings } from '@utils/constants';
import { copy } from '@utils/content';

function IconLink({ Icon, url, ...props }) {
    return (
        <Link href={url} isExternal>
            <Icon
                boxSize={[8, 8, 10, 10]}
                borderRadius={'50%'}
                boxShadow={'1px 1px 2px #888'}
                _hover={{ color: 'brand.600' }}
                {...props}
            />
        </Link>
    );
}

export const TwitterLogo = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            fill="currentColor"
        />
    </Icon>
);

const etherscanUrl = `https://${networkStrings.etherscan}etherscan.io/address/${BIRTHBLOCK_CONTRACT_ADDRESS}`;
const twitterUrl = 'https://twitter.com/The_Metagame';
const openseaUrl = `https://opensea.io/collection/${copy.nameLowercase}`;

const EtherscanIcon = (props) => (
    <Icon viewBox="0 0 52 52" {...props}>
        <path
            d="M10.8071 24.7582C10.807 24.4678 10.8643 24.1803 10.9757 23.9121C11.0871 23.6439 11.2503 23.4004 11.456 23.1955C11.6618 22.9906 11.9059 22.8284 12.1745 22.7182C12.4431 22.608 12.7308 22.552 13.0211 22.5533L16.6917 22.5654C17.2769 22.5654 17.8382 22.7979 18.252 23.2119C18.6659 23.6259 18.8984 24.1874 18.8984 24.7729V38.6576C19.3119 38.535 19.8422 38.4044 20.4231 38.268C20.8265 38.1731 21.186 37.9446 21.4433 37.6197C21.7006 37.2947 21.8407 36.8924 21.8408 36.4779V19.2551C21.8407 18.9651 21.8978 18.678 22.0087 18.4101C22.1196 18.1423 22.2821 17.8989 22.4871 17.6938C22.692 17.4888 22.9353 17.3261 23.2031 17.2151C23.4708 17.1042 23.7578 17.047 24.0477 17.047H27.7255C28.3108 17.0471 28.872 17.2797 29.2858 17.6937C29.6996 18.1077 29.9322 18.6691 29.9323 19.2545V35.2401C29.9323 35.2401 30.8527 34.8672 31.7499 34.4885C32.0831 34.3475 32.3674 34.1115 32.5674 33.8099C32.7674 33.5084 32.8742 33.1546 32.8745 32.7927V13.7353C32.8744 13.4454 32.9315 13.1584 33.0424 12.8905C33.1533 12.6227 33.3158 12.3793 33.5207 12.1744C33.7256 11.9694 33.9688 11.8068 34.2366 11.6958C34.5043 11.5849 34.7912 11.5278 35.081 11.5278H38.7589C39.3441 11.5278 39.9054 11.7603 40.3193 12.1743C40.7332 12.5883 40.9657 13.1498 40.9658 13.7353V29.428C44.1544 27.1164 47.386 24.3359 49.9504 20.9926C50.3225 20.5073 50.5687 19.9375 50.6671 19.3338C50.7655 18.7302 50.7129 18.1116 50.5142 17.5332C48.779 12.4746 45.5243 8.07557 41.195 4.93763C36.8656 1.7997 31.6731 0.0760482 26.3273 0.00235712C11.9121 -0.191356 -0.00129132 11.58 0.000124732 26.0021C-0.0140293 30.5657 1.17664 35.0522 3.45175 39.0078C3.7655 39.5489 4.22709 39.9891 4.78228 40.2768C5.33747 40.5645 5.96322 40.6878 6.586 40.6321C7.28181 40.5708 8.14808 40.4842 9.17791 40.3633C9.62614 40.3123 10.04 40.0981 10.3406 39.7616C10.6411 39.4251 10.8075 38.9897 10.808 38.5384V24.7582"
            fill="currentColor"
        />
        <path
            d="M10.7272 47.026C14.604 49.8473 19.1854 51.5407 23.9646 51.919C28.7437 52.2973 33.5343 51.3456 37.8064 49.1693C42.0784 46.9931 45.6654 43.677 48.1704 39.588C50.6755 35.499 52.0009 30.7965 52.0002 26.0007C52.0002 25.402 51.9724 24.8101 51.9324 24.2213C42.4374 38.3868 24.906 45.0092 10.7271 47.0266"
            fill="currentColor"
        />
    </Icon>
);

export const EtherscanSquare = (props) => (
    <Icon viewBox="0 0 100 100" {...props}>
        <path
            d="M20.7828 47.6117C20.7827 47.0533 20.8929 46.5003 21.107 45.9846C21.3212 45.4688 21.6351 45.0005 22.0307 44.6065C22.4264 44.2125 22.8959 43.9006 23.4124 43.6887C23.9289 43.4768 24.4822 43.369 25.0404 43.3716L32.0992 43.3948C33.2247 43.3948 34.3041 43.842 35.0999 44.6382C35.8958 45.4343 36.3429 46.5141 36.3429 47.64V74.3412C37.1381 74.1055 38.1579 73.8542 39.2751 73.5921C40.0508 73.4094 40.7421 72.9701 41.2369 72.3452C41.7317 71.7203 42.0011 70.9466 42.0013 70.1494V37.0288C42.0013 36.4712 42.111 35.9191 42.3243 35.404C42.5375 34.8888 42.8501 34.4207 43.2442 34.0264C43.6383 33.6321 44.1062 33.3193 44.6211 33.1059C45.136 32.8925 45.688 32.7826 46.2453 32.7826H53.3181C54.4435 32.7828 55.5228 33.2301 56.3186 34.0262C57.1145 34.8223 57.5616 35.902 57.5618 37.0278V67.7692C57.5618 67.7692 59.3319 67.0521 61.0573 66.3237C61.698 66.0526 62.2448 65.5988 62.6293 65.0188C63.0139 64.4389 63.2193 63.7585 63.2198 63.0626V26.4139C63.2198 25.8564 63.3295 25.3044 63.5428 24.7894C63.756 24.2743 64.0685 23.8063 64.4626 23.4121C64.8566 23.0179 65.3244 22.7052 65.8393 22.4919C66.3541 22.2785 66.9059 22.1687 67.4632 22.1687H74.536C75.6615 22.1687 76.7409 22.616 77.5368 23.4121C78.3327 24.2082 78.7799 25.288 78.78 26.4139V56.5921C84.9119 52.1467 91.1265 46.7996 96.0581 40.3703C96.7737 39.437 97.2471 38.3411 97.4363 37.1803C97.6255 36.0195 97.5245 34.8299 97.1423 33.7176C93.8054 23.9895 87.5463 15.5299 79.2208 9.49541C70.8952 3.46095 60.9096 0.146246 50.6293 0.00453289C22.9078 -0.367991 -0.0024833 22.2692 0.000239869 50.0038C-0.0269792 58.78 2.26277 67.4078 6.63795 75.0147C7.24132 76.0552 8.12898 76.9018 9.19666 77.4551C10.2643 78.0084 11.4677 78.2454 12.6653 78.1383C14.0034 78.0205 15.6693 77.8539 17.6497 77.6214C18.5117 77.5232 19.3075 77.1114 19.8856 76.4642C20.4637 75.8171 20.7836 74.9799 20.7844 74.112V47.6117"
            fill="currentColor"
        />
        <path
            d="M20.6294 90.4343C28.0847 95.8598 36.895 99.1164 46.0857 99.8438C55.2763 100.571 64.489 98.7412 72.7044 94.556C80.9199 90.3709 87.8179 83.9938 92.6352 76.1304C97.4526 68.267 100.002 59.2237 100 50.0011C100 48.8498 99.9466 47.7115 99.8697 46.5793C81.6102 73.8205 47.8961 86.5558 20.629 90.4353"
            fill="currentColor"
        />
        <path
            d="M20.6294 90.4343C28.0847 95.8598 36.895 99.1164 46.0857 99.8438C55.2763 100.571 64.489 98.7412 72.7044 94.556C80.9199 90.3709 87.8179 83.9938 92.6352 76.1304C97.4526 68.267 100.002 59.2237 100 50.0011C100 48.8498 99.9466 47.7115 99.8697 46.5793C81.6102 73.8205 47.8961 86.5558 20.629 90.4353"
            fill="currentColor"
        />
        <path
            d="M20.6294 90.4343C28.0847 95.8598 36.895 99.1164 46.0857 99.8438C55.2763 100.571 64.489 98.7412 72.7044 94.556C80.9199 90.3709 87.8179 83.9938 92.6352 76.1304C97.4526 68.267 100.002 59.2237 100 50.0011C100 48.8498 99.9466 47.7115 99.8697 46.5793C81.6102 73.8205 47.8961 86.5558 20.629 90.4353"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 0H0V100H100V0ZM50 99C77.062 99 99 77.062 99 50C99 22.938 77.062 1 50 1C22.938 1 1 22.938 1 50C1 77.062 22.938 99 50 99Z"
            fill="currentColor"
        />
    </Icon>
);

const OpenseaIcon = (props) => (
    <Icon viewBox="0 0 90 90" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M90 45C90 69.8514 69.8513 90 45 90C20.1487 90 0 69.8514 0 45C0 20.1486 20.1487 0 45 0C69.8567 0 90 20.1486 90 45ZM22.2012 46.512L22.3953 46.2069L34.1016 27.8939C34.2727 27.6257 34.6748 27.6535 34.8042 27.9447C36.76 32.3277 38.4475 37.7786 37.657 41.1721C37.3193 42.5683 36.3948 44.4593 35.3545 46.2069C35.2205 46.4612 35.0725 46.7109 34.9153 46.9513C34.8909 46.988 34.8608 47.0197 34.8264 47.0457C34.8044 47.0623 34.7808 47.0767 34.7559 47.0885C34.7026 47.1136 34.6436 47.127 34.5825 47.127H22.5432C22.2195 47.127 22.03 46.7756 22.2012 46.512ZM74.3799 52.8137V49.9149C74.3799 49.6467 74.1211 49.4525 73.8667 49.5265L60.177 53.4841C60.1033 53.5026 60.0383 53.5442 59.9875 53.5997C58.4851 55.2594 57.2136 56.3598 56.9224 56.6141C56.0715 57.3353 55.0176 57.7283 53.908 57.7283H48.9517V52.675H52.8909C52.9924 52.675 53.0896 52.638 53.1636 52.5733L53.6721 52.1063C53.8894 51.9075 54.1482 51.6671 54.458 51.3573L54.5342 51.2812C54.6982 51.118 54.8733 50.9435 55.0452 50.7517C55.1646 50.635 55.2825 50.5104 55.3967 50.3834C55.4773 50.294 55.5559 50.2035 55.6323 50.1137C55.8093 49.9236 55.9817 49.7289 56.1548 49.5288C56.2847 49.3786 56.415 49.2254 56.5479 49.0688C56.7698 48.8284 56.9731 48.5556 57.1721 48.2828C57.3938 48.0239 57.6111 47.7327 57.8147 47.4553C57.9067 47.3201 58.0059 47.1832 58.1064 47.0422C58.1677 46.9565 58.2295 46.8693 58.2908 46.7802C58.3696 46.662 58.4485 46.5398 58.5239 46.4178C58.5898 46.3109 58.6531 46.2043 58.7114 46.1006C59.0999 45.4996 59.4282 44.8569 59.7056 44.2143C59.8323 43.9404 59.9336 43.6521 60.032 43.3716L60.0708 43.2619C60.1819 42.9336 60.2742 42.6239 60.3435 42.2956C60.51 41.5235 60.5471 40.756 60.4729 39.9886C60.4546 39.7482 60.436 39.5124 60.3806 39.2904V39.2535C60.3674 39.141 60.3447 39.019 60.3142 38.8994C60.302 38.8519 60.2886 38.8048 60.2742 38.7588C60.1079 38.0098 59.8489 37.2608 59.5205 36.5257C59.4854 36.4394 59.4485 36.3527 59.4104 36.2664C59.3281 36.0797 59.2407 35.8951 59.1555 35.7212C58.8596 35.1711 58.5498 34.6209 58.1985 34.0892C58.1282 33.9774 58.0505 33.8643 57.9734 33.7513C57.9131 33.6632 57.8528 33.5753 57.7961 33.4882C57.6162 33.2107 57.4182 32.9412 57.2207 32.6785C57.1187 32.5429 57.0168 32.4091 56.9177 32.2769C56.6958 31.9856 56.4414 31.6943 56.2012 31.3984C55.9607 31.1071 55.7249 30.8297 55.4846 30.557C54.6245 29.5861 53.7229 28.7076 52.9185 27.9587C52.7705 27.8107 52.6086 27.6628 52.4424 27.5194C51.8181 26.9508 51.2495 26.4561 50.7732 26.0723C50.6296 25.9618 50.5007 25.8529 50.3809 25.7515C50.3 25.6833 50.2234 25.6186 50.1492 25.5591C49.9133 25.3835 49.7285 25.2401 49.5991 25.143C49.562 25.1153 49.5205 25.0968 49.4788 25.0829L48.9517 24.935V20.5706C48.9517 19.8586 48.665 19.2206 48.2073 18.7536C47.7495 18.2866 47.1116 18 46.4089 18C45.0034 18 43.866 19.1512 43.866 20.5706V23.511L43.6025 23.437L42.886 23.2336L42.2339 23.0533C42.2322 23.0533 42.2302 23.0526 42.228 23.0516C42.2249 23.0503 42.2209 23.0487 42.2156 23.0487H42.2017L37.2546 21.7079C37.0374 21.6478 36.8523 21.8836 36.9634 22.0824L37.7539 23.5434C37.8279 23.7283 37.9343 23.9132 38.0269 24.112C38.1562 24.371 38.2856 24.6437 38.4104 24.9165C38.5215 25.1569 38.6323 25.3927 38.762 25.6516C39.0161 26.2203 39.2935 26.8213 39.5664 27.4825L39.5708 27.4922C39.7542 27.9282 39.9375 28.3643 40.0979 28.8186C40.5417 29.9698 40.9626 31.1996 41.3279 32.4618C41.4573 32.864 41.5498 33.2478 41.6606 33.65L41.7114 33.8719C41.8596 34.4591 41.989 35.0416 42.0813 35.6288C42.1226 35.8527 42.1624 36.0709 42.196 36.2873C42.2227 36.4597 42.2454 36.6309 42.2617 36.8031C42.3171 37.2423 42.3728 37.6815 42.3911 38.1207C42.4119 38.3449 42.4268 38.5748 42.4358 38.804C42.4431 38.9861 42.4468 39.1678 42.4468 39.3459C42.4468 40.3723 42.3542 41.3617 42.137 42.2956L42.0964 42.4463C42.0354 42.674 41.9722 42.9102 41.8965 43.1371C41.8413 43.3325 41.7732 43.5279 41.7009 43.7282C41.6516 43.8643 41.6003 44.0027 41.5498 44.1449C41.4758 44.3438 41.4019 44.5472 41.3093 44.746C40.8516 45.8463 40.283 46.9421 39.6958 47.9684C38.8357 49.4895 37.9712 50.8257 37.3657 51.6856C37.2825 51.8104 37.2039 51.9214 37.1345 52.0277C36.9448 52.2959 37.1392 52.675 37.4673 52.675H43.866V57.7283H37.3933C35.655 57.7283 34.0461 56.7435 33.2693 55.167C32.8672 54.3764 32.71 53.5072 32.8025 52.6565C32.8254 52.4022 32.636 52.1618 32.377 52.1618H19.3022C19.0803 52.1618 18.8999 52.3421 18.8999 52.564V52.8322C18.8999 61.1727 25.6362 67.932 33.949 67.932H57.4031C61.7996 67.932 64.2961 63.9255 66.75 59.9877C67.4338 58.89 68.1145 57.7977 68.832 56.799C70.1218 55.0052 73.2241 53.5812 74.1304 53.1928C74.2783 53.1281 74.3799 52.9801 74.3799 52.8137Z"
            fill="currentColor"
        />
    </Icon>
);

export const OpenseaSquare = (props) => (
    <Icon viewBox="0 0 90 90" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M90 0H0V90H90V0ZM45 79C63.7777 79 79 64.0015 79 45.5C79 26.9985 63.7777 12 45 12C26.2223 12 11 26.9985 11 45.5C11 64.0015 26.2223 79 45 79Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45ZM22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512ZM74.38 52.8137V49.9149C74.38 49.6467 74.1211 49.4525 73.8668 49.5265L60.1771 53.4841C60.1032 53.5026 60.0384 53.5442 59.9876 53.5997C58.5211 55.2195 57.2748 56.3066 56.945 56.5943L56.9223 56.6141C56.0716 57.3353 55.0175 57.7283 53.9079 57.7283H48.9517V52.675H52.8908C52.9925 52.675 53.0896 52.638 53.1635 52.5733L53.6721 52.1063C53.8894 51.9075 54.1483 51.6671 54.4581 51.3573C54.4841 51.3312 54.5106 51.3049 54.5373 51.2783C54.7002 51.1159 54.8744 50.9423 55.0452 50.7517C55.2487 50.5529 55.4475 50.331 55.6324 50.1137C55.9422 49.7808 56.2381 49.434 56.5478 49.0688C56.7697 48.8284 56.9732 48.5556 57.172 48.2828C57.3939 48.0239 57.6112 47.7327 57.8146 47.4553C57.89 47.3446 57.9701 47.2327 58.052 47.1184C58.1309 47.0083 58.2114 46.8959 58.2908 46.7802C58.4388 46.5583 58.5867 46.3225 58.7115 46.1006C59.0999 45.4996 59.4282 44.8569 59.7056 44.2143C59.8327 43.9395 59.9343 43.6502 60.0331 43.3689C60.0457 43.3331 60.0583 43.2974 60.0708 43.2619C60.1818 42.9336 60.2742 42.6239 60.3436 42.2956C60.51 41.5235 60.547 40.756 60.473 39.9886C60.4545 39.7482 60.436 39.5124 60.3806 39.2904V39.2535C60.3621 39.0963 60.3251 38.9206 60.2742 38.7588C60.1078 38.0098 59.8489 37.2608 59.5206 36.5257C59.4097 36.2529 59.2802 35.9755 59.1554 35.7212C58.8595 35.1711 58.5497 34.6209 58.1984 34.0892C58.1278 33.9768 58.0498 33.8629 57.9719 33.7492C57.9121 33.6618 57.8524 33.5746 57.7961 33.4882C57.5734 33.1447 57.323 32.8135 57.0801 32.4922C57.0255 32.42 56.9712 32.3482 56.9177 32.2769C56.7743 32.0886 56.6174 31.9004 56.4594 31.7109C56.3729 31.6072 56.2861 31.5031 56.2011 31.3984C55.9607 31.1071 55.7249 30.8297 55.4845 30.557C54.6245 29.5861 53.723 28.7076 52.9185 27.9587C52.7706 27.8107 52.6087 27.6628 52.4423 27.5194C51.8181 26.9508 51.2495 26.4561 50.7733 26.0723C50.6298 25.962 50.5012 25.8532 50.3814 25.7521C50.3005 25.6837 50.2237 25.6188 50.1491 25.5591C50.0024 25.4499 49.8754 25.3531 49.7692 25.2721C49.7047 25.223 49.6479 25.1797 49.599 25.143C49.562 25.1153 49.5204 25.0968 49.4787 25.0829L48.9517 24.935V20.5706C48.9517 19.8586 48.665 19.2206 48.2073 18.7536C47.7496 18.2866 47.1116 18 46.4089 18C45.0034 18 43.866 19.1512 43.866 20.5706V23.511L43.6025 23.437L42.8859 23.2336L42.234 23.0533C42.2321 23.0533 42.2302 23.0525 42.2279 23.0516C42.2247 23.0503 42.2209 23.0487 42.2155 23.0487H42.2016L37.2546 21.7079C37.0374 21.6478 36.8524 21.8836 36.9634 22.0824L37.754 23.5434C37.7989 23.6558 37.8559 23.7683 37.9145 23.8839C37.9522 23.9583 37.9906 24.0341 38.0268 24.112C38.1562 24.371 38.2857 24.6437 38.4105 24.9165C38.5214 25.1569 38.6324 25.3927 38.7619 25.6516C38.8164 25.7736 38.872 25.897 38.9284 26.0222C39.1349 26.4808 39.352 26.9631 39.5663 27.4825L39.5681 27.4869C39.7524 27.9246 39.9367 28.3624 40.098 28.8186C40.5418 29.9698 40.9626 31.1996 41.3278 32.4618C41.4186 32.7439 41.4912 33.017 41.5648 33.2937C41.5961 33.4115 41.6276 33.5299 41.6607 33.65L41.7115 33.8719C41.8595 34.4591 41.9889 35.0416 42.0814 35.6288C42.1554 36.031 42.2247 36.4147 42.2617 36.8031C42.3172 37.2423 42.3727 37.6815 42.3912 38.1207C42.4282 38.523 42.4467 38.9437 42.4467 39.3459C42.4467 40.3723 42.3542 41.3617 42.1369 42.2956C42.1234 42.3455 42.1098 42.3961 42.0962 42.4471C42.0352 42.6746 41.972 42.9105 41.8965 43.1371C41.828 43.3803 41.7392 43.6235 41.647 43.876C41.6147 43.9644 41.5821 44.0539 41.5497 44.1449L41.5338 44.1878C41.4651 44.373 41.3952 44.5615 41.3093 44.746C40.8516 45.8463 40.2829 46.9421 39.6958 47.9684C38.8358 49.4895 37.9713 50.8257 37.3656 51.6856C37.3287 51.7409 37.2928 51.7935 37.2581 51.8441C37.2146 51.9078 37.1731 51.9685 37.1345 52.0277C36.9449 52.2959 37.1391 52.675 37.4673 52.675H43.866V57.7283H37.3934C35.655 57.7283 34.0461 56.7435 33.2693 55.167C32.8671 54.3764 32.7099 53.5072 32.8024 52.6565C32.8255 52.4022 32.6359 52.1618 32.377 52.1618H19.3023C19.0803 52.1618 18.9 52.3421 18.9 52.564V52.8322C18.9 61.1727 25.6362 67.932 33.949 67.932H57.4031C61.7996 67.932 64.296 63.9256 66.7498 59.9878C67.4338 58.8901 68.1144 57.7978 68.832 56.799C70.1219 55.0052 73.2242 53.5812 74.1304 53.1928C74.2783 53.1281 74.38 52.9801 74.38 52.8137Z"
            fill="currentColor"
        />
    </Icon>
);

const TwitterIcon = (props) => (
    <Icon viewBox="0 0 71 71" {...props}>
        <path
            d="M35.5 0C15.8951 0 0 15.8951 0 35.5C0 55.1049 15.8951 71 35.5 71C55.1049 71 71 55.1049 71 35.5C71 15.8951 55.1049 0 35.5 0ZM53.4452 28.5331C53.9866 40.4848 45.0732 53.8091 29.2934 53.8091C24.495 53.8091 20.0309 52.401 16.2708 49.9899C20.7793 50.5224 25.279 49.2681 28.8497 46.4725C25.134 46.4044 21.9952 43.946 20.9095 40.5706C22.2437 40.825 23.5572 40.751 24.7494 40.4256C20.664 39.6032 17.8417 35.923 17.9334 31.9855C19.0812 32.6215 20.3888 33.0032 21.7822 33.0475C17.9985 30.5182 16.9276 25.5215 19.1522 21.7023C23.3412 26.8439 29.604 30.2253 36.6656 30.5803C35.426 25.2671 39.4582 20.1462 44.946 20.1462C47.3866 20.1462 49.5965 21.1787 51.1466 22.8295C53.0814 22.4508 54.9037 21.7408 56.5426 20.7675C55.9066 22.7525 54.5605 24.4151 52.8062 25.4683C54.525 25.2612 56.164 24.8056 57.6845 24.1282C56.5485 25.8381 55.1108 27.335 53.4452 28.5331V28.5331Z"
            fill="currentColor"
        />
    </Icon>
);

export const TwitterSquare = (props) => (
    <Icon viewBox="0 0 90 90" {...props}>
        <path
            d="M45 0C20.1488 0 0 20.1488 0 45C0 69.8512 20.1488 90 45 90C69.8512 90 90 69.8512 90 45C90 20.1488 69.8512 0 45 0ZM67.7475 36.1688C68.4337 51.3188 57.135 68.2087 37.1325 68.2087C31.05 68.2087 25.3913 66.4238 20.625 63.3675C26.34 64.0425 32.0437 62.4525 36.57 58.9087C31.86 58.8225 27.8812 55.7062 26.505 51.4275C28.1962 51.75 29.8613 51.6562 31.3725 51.2437C26.1938 50.2012 22.6162 45.5363 22.7325 40.545C24.1875 41.3513 25.845 41.835 27.6112 41.8912C22.815 38.685 21.4575 32.3512 24.2775 27.51C29.5875 34.0275 37.5262 38.3137 46.4775 38.7637C44.9063 32.0287 50.0175 25.5375 56.9737 25.5375C60.0675 25.5375 62.8687 26.8462 64.8337 28.9388C67.2862 28.4588 69.5963 27.5587 71.6738 26.325C70.8675 28.8412 69.1613 30.9488 66.9375 32.2838C69.1163 32.0213 71.1938 31.4438 73.1213 30.585C71.6813 32.7525 69.8588 34.65 67.7475 36.1688V36.1688Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M90 0H0V90H90V0ZM45 79C63.7777 79 79 64.0015 79 45.5C79 26.9985 63.7777 12 45 12C26.2223 12 11 26.9985 11 45.5C11 64.0015 26.2223 79 45 79Z"
            fill="currentColor"
        />
    </Icon>
);

export const Twitter = (props) => <IconLink Icon={TwitterSquare} url={twitterUrl} {...props} />;
export const Opensea = (props) => <IconLink Icon={OpenseaSquare} url={openseaUrl} {...props} />;
export const Etherscan = (props) => <IconLink Icon={EtherscanIcon} url={etherscanUrl} {...props} />;

export const Logo = (props) => (
    <Icon viewBox="0 0 100 100" {...props}>
        <circle
            cx="50"
            cy="50"
            r="48.13432835820896"
            stroke="currentColor"
            strokeWidth="3"
            fillOpacity="0%"
        />
        <circle
            cx="50"
            cy="26.49802458296751"
            r="24.63235294117647"
            stroke="currentColor"
            strokeWidth="3"
            fillOpacity="0%"
        />
        <circle
            cx="50"
            cy="18.28724026924202"
            r="16.42156862745098"
            stroke="currentColor"
            strokeWidth="3"
            fillOpacity="0%"
        />
        <circle
            cx="50"
            cy="14.18184811237927"
            r="12.316176470588236"
            stroke="currentColor"
            strokeWidth="3"
            fillOpacity="0%"
        />
        <circle
            cx="50"
            cy="10.07645595551653"
            r="8.21078431372549"
            stroke="currentColor"
            strokeWidth="3"
            fillOpacity="0%"
        />
        <circle
            cx="50"
            cy="5.971063798653788"
            r="4.105392156862745"
            stroke="currentColor"
            strokeWidth="3"
            fillOpacity="0%"
        />
    </Icon>
);

export const TwelveCircles = (props) => (
    <Icon viewBox="0 0 336 338" {...props}>
        <circle
            cx="167.9"
            cy="34.9"
            r="32.9"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            cx="100.9"
            cy="52.9"
            r="32.9"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            cx="51.9"
            cy="101.9"
            r="32.9"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            cx="34.9"
            cy="168.9"
            r="32.9"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            r="32.9"
            transform="matrix(1 0 0 -1 51.9 235.9)"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            r="32.9"
            transform="matrix(1 0 0 -1 100.9 284.9)"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            r="32.9"
            transform="matrix(1 0 0 -1 167.9 302.9)"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            cx="234.9"
            cy="284.9"
            r="32.9"
            transform="rotate(-180 234.9 284.9)"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            cx="283.9"
            cy="235.9"
            r="32.9"
            transform="rotate(-180 283.9 235.9)"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            r="32.9"
            transform="matrix(-1 0 0 1 300.9 168.9)"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            r="32.9"
            transform="matrix(-1 0 0 1 283.9 101.9)"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle
            r="32.9"
            transform="matrix(-1 0 0 1 234.9 52.9)"
            stroke="currentColor"
            strokeWidth="4"
            fillOpacity="0%"
        />
        <circle cx="168" cy="169" r="98" stroke="currentColor" strokeWidth="4" fillOpacity="0%" />
    </Icon>
);
