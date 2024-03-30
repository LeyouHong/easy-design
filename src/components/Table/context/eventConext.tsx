import { createContext } from 'react';
import { TableEvent } from '../types';

interface EventContextProps<R = any> {
  $event?: TableEvent<R>;
}

const EventContext = createContext<EventContextProps>({});

export default EventContext;
