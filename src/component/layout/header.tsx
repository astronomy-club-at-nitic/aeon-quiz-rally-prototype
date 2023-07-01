import { ComponentPropsWithoutRef } from 'react';
import AeonLogoImage from '@/asset/aeon-logo.png';
import BrandLogoDarkImage from '@/asset/brand-logo-dark.png';
import { Image } from '@/component/common/image';
import { CrossIcon } from '@/icon/cross-icon';
import { cn } from '@/util/tailwind';

type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header = ({ className, ...props }: HeaderProps) => (
  <header className={cn('flex w-screen items-center justify-center gap-3 bg-mauve-3 p-5', className)} {...props}>
    <Image src={BrandLogoDarkImage} height={40} alt="茨城高専 天文部のロゴ。" />
    <CrossIcon className="h-5 w-5" />
    <Image src={AeonLogoImage} height={40} alt="イオン株式会社のロゴ。" />
  </header>
);
