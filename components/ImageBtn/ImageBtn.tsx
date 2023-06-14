import Image from 'next/image';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import styles from './ImageBtn.module.scss';

type IImageBtn = {
  title?: string;
  srcImg: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Ref = HTMLButtonElement;

const ImageBtn = forwardRef<Ref, IImageBtn>((props, ref) => {
  const { title, srcImg } = props;

  return (
    <button ref={ref} className={styles.btn_wrapper} {...props}>
      <Image src={srcImg} alt="" width={25} height={25} />
      {title && title}
    </button>
  );
});

ImageBtn.displayName = 'ImageBtn';

export default ImageBtn;
