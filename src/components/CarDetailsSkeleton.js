import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function CarDetailsSkeleton() {
  return (
    <div className='carDetailsSkeleton'>
      <Stack spacing={1}>
        <Skeleton variant='rounded' width='100%' height={120} />
        <Skeleton variant='text' sx={{ fontSize: '18px' }} width='40%' />

        <Skeleton
          className='carDetailsSkeleton_title'
          variant='rounded'
          width='50%'
          height={24}
        />
        <Skeleton variant='rounded' width='60%' height={16} />

        <div className='carDetailsSkeleton_price'>
          <Skeleton variant='rounded' width='40%' height={48} />

          <div className='carDetailsSkeleton_price-offer'>
            <Skeleton variant='rounded' width='100%' height={20} />
            <Skeleton variant='rounded' width='100%' height={20} />
          </div>
        </div>

        <Skeleton variant='rounded' width='100%' height={52} />

        <div className='carDetailsSkeleton_iconsContainer'>
          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={60} height={60} />
            <Skeleton variant='rounded' width={60} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={60} height={60} />
            <Skeleton variant='rounded' width={60} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={60} height={60} />
            <Skeleton variant='rounded' width={60} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={60} height={60} />
            <Skeleton variant='rounded' width={60} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={60} height={60} />
            <Skeleton variant='rounded' width={60} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={60} height={60} />
            <Skeleton variant='rounded' width={60} height={18} />
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default CarDetailsSkeleton;
