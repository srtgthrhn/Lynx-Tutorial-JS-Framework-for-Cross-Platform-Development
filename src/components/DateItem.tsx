import dateIcon from "../assets/date.png";

interface IDateItem {
  date: number;
}

const DateItem = (props: IDateItem) => {
  const { date } = props;

  return (
    <view className="release-date-container">
      <image src={dateIcon} className="release-date-icon" />
      <text className="release-date">{date}</text>
    </view>
  );
};

export default DateItem;
