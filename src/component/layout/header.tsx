import { ComponentPropsWithoutRef, type ReactNode } from 'react';
import AeonLogoImage from '@/asset/aeon-logo.png';
import BrandLogoDarkImage from '@/asset/brand-logo-dark.png';
import { Image } from '@/component/common/image';
import { Link } from '@/component/common/link';
import { CrossIcon } from '@/icon/cross-icon';
import { cn } from '@/util/tailwind';

type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header = ({ className, ...props }: HeaderProps): ReactNode => (
  <header className={cn('flex w-screen justify-center bg-mauve-3 p-5', className)} {...props}>
    <Link href="/" className="flex items-center justify-center gap-3">
      <Image src={AeonLogoImage} height={40} alt="イオン株式会社のロゴ。" className="h-8 w-auto tablet:h-10" />
      <CrossIcon className="h-5 w-5" />
      <Image src={BrandLogoDarkImage} height={40} alt="茨城高専 天文部のロゴ。" className="h-8 w-auto tablet:h-10" />
    </Link>
  </header>
);
