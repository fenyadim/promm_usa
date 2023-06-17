import Image from 'next/image';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import styles from './ImageBtn.module.scss';

type IImageBtn = {
  title?: string;
  srcImg: string;
  sizeImg?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Ref = HTMLButtonElement;

const ImageBtn = forwardRef<Ref, IImageBtn>((props, ref) => {
  const { title, srcImg, sizeImg = 25 } = props;

  return (
    <button ref={ref} className={styles.btn_wrapper} {...props}>
      <Image src={srcImg} alt="" width={sizeImg} height={sizeImg} />
      {title && title}
    </button>
  );
});

ImageBtn.displayName = 'ImageBtn';

export default ImageBtn;
