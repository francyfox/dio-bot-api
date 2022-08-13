import { Injectable } from '@nestjs/common';
import { randomIntFromInterval } from '../../helper';

@Injectable()
export class MessageService {
  recognizeMessage(msgText: string) {
    return msgText.toLowerCase()?.trim();
  }

  notRecognizeMessage() {
    const msgs = [
      'Извините, не могу распознать текст, это клингонский?',
      'Ты Венера, я Земля, мы такие разные, я не понимаю тебя!',
      'В моём словаре нет таких слов, ты не туда попал пацанчик!',
      'Дио - гордый птиц, покай не растолкуешь, не полетит.',
    ];

    return msgs[randomIntFromInterval(0, msgs.length)];
  }
}
