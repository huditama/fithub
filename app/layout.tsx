import React, { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FIT HUB SCHEDULE',
  description: 'App to view Fit Hub weekly schedule',
};

type LayoutProps = {
  children: ReactNode;
};
const RootLayout: FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={poppins.className}>{children}</body>
  </html>
);

export default RootLayout;
