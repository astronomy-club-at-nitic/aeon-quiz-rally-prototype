import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { AiFillCamera } from 'react-icons/ai';

type CameraIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CameraIcon = ({ ...props }: CameraIconProps): ReactNode => <AiFillCamera {...props} />;
