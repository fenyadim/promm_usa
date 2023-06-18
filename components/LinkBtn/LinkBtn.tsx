import Link from 'next/link';
import { FC } from 'react';

import styles from './LinkBtn.module.scss';

interface ILinkBtn {
  title: string;
}

const LinkBtn: FC<ILinkBtn> = ({ title }) => {
  return (
    <Link className={styles.link_btn} href="">
      {title}
    </Link>
  );
};

export default LinkBtn;
