'use client';
import { Button } from '@/components/ui/button';
import { Heading, Text } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import React, { forwardRef } from 'react';

export interface JobCardProps extends React.HTMLAttributes<HTMLDivElement> {
  jobID: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  roleType: PreferredLevelType;
  isRemote?: boolean;
  salary: {
    lower: string;
    higher?: string;
  };
}

export interface JobCardPreviewProps extends JobCardProps { }

export const JobCard = forwardRef<HTMLDivElement, JobCardProps>(
  (
    {
      className,
      jobID,
      jobTitle,
      roleType,
      companyName,
      companyLogo,
      salary,
      isRemote = false,
      ...args
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn('job-card border rounded-2xl p-2', className)}
        {...args}>
        <div className="company-role-details-wrapper p-4 rounded-xl h-[200px] bg-gray-100 relative">
          <div className="bookmark-action-wrapper mb-4 flex flex-row items-center justify-between">
            <div className="company-logo-wrapper">
              <Image
                src={companyLogo}
                alt={companyName}
                width={32}
                height={32}
              />
            </div>
            <button className="p-3 rounded-full bg-white text-black">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
          <div className="company-details-wrapper grid grid-cols-1 gap-3">
            <div className="company-name-role-wrapper">
              <Text as="small">{companyName}</Text>
              <Heading as="h3" className="font-medium">
                {jobTitle}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

JobCard.displayName = 'JobCard';

export const JobCardPreview = forwardRef<HTMLDivElement, JobCardPreviewProps>(
  (
    {
      className,
      companyLogo,
      companyName,
      salary,
      isRemote,
      jobTitle,
      jobID,
      ...args
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'job-card-preview border rounded-2xl p-2 w-[320px]',
          className,
        )}
        {...args}>
        <div className="company-role-details-wrapper p-4 rounded-xl relative">
          <div className="bookmark-action-wrapper flex flex-row items-center gap-2 mb-2">
            <div className="company-logo-wrapper">
            </div>
            <Text as="small">{companyName}</Text>
          </div>
          <div className="company-details-wrapper grid grid-cols-1 gap-3">
            <div className="company-name-role-wrapper">
              <Heading as="h4" className="font-medium">
                {jobTitle}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

JobCardPreview.displayName = 'JobCardPreview';