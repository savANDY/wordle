import {useEffect, useState} from 'react'
import moment from "moment";

type Props = {
  date: moment.Moment
}

export const Timer = ({
                        date
                      }: Props) => {
  const [timeLeft, setTimeLeft] = useState(moment.utc(moment.duration(date.diff(moment())).asMilliseconds()).format("hh:mm:ss"));

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      const time = moment.utc(moment.duration(date.diff(moment())).asMilliseconds()).format("hh:mm:ss");
      setTimeLeft(time);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
      <h1>{timeLeft}</h1>
  )
}
