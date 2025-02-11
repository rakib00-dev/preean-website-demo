import React from 'react';
import { Typography, Button, Tooltip } from '@material-tailwind/react';
import { useCopyToClipboard } from 'usehooks-ts';
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import SolutionHeader from './Solutions Components/SolutionHeader';

const BookACall = () => {
  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden">
      <SolutionHeader
        page1stTitle="Pick A Date"
        page2ndTitle="On Cal.com"
        pagePara="Pick A date and book a call with your flaxible time"
        done
      />
      <div className="grid place-items-center my-5  md:scale-125">
        <ClipboardWithTooltip />
      </div>
    </section>
  );
};

export default BookACall;

function ClipboardWithTooltip() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <Tooltip content={copied ? 'Copied' : 'Copy'}>
      <Button
        onMouseLeave={() => setCopied(false)}
        onClick={() => {
          copy('https://cal.com/md-rejoanul-hasan-rakib/15min');
          setCopied(true);
        }}
        className="flex cursor-pointer items-center gap-x-3 px-4 py-2.5 lowercase"
      >
        <Typography
          className="border-r border-gray-400/50 pr-3 font-normal"
          variant="small"
        >
          https://cal.com/md-rejoanul-hasan-rakib/15min
        </Typography>
        {copied ? (
          <CheckIcon className="h-4 w-4 text-white" />
        ) : (
          <DocumentDuplicateIcon className="h-4 w-4 text-white" />
        )}
      </Button>
    </Tooltip>
  );
}
