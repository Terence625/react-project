interface IWarningBannerProps {
  warn: boolean;
}

export default function WarningBanner(props: IWarningBannerProps) {
  if (props.warn) {
    return <div className="warning">Warning!</div>;
  }
  return null;
}
