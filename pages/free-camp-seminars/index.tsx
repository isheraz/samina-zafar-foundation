import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Head, Header, Footer } from '../../partials';

const App: React.FC<any> = () => {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      start: moment()
        .format('YYYY-MM-dd')
        .toString(),
      end: moment()
        .format('YYYY-MM-dd')
        .toString(),
      eventClasses: 'optionalEvent',
      title: 'test event',
      description: 'This is a test description of an event'
    },
    {
      start: '2020-12-12',
      end: '2020-12-25',
      title: 'test event',
      description: 'This is a test description of an event',
      data: 'you can add what ever random data you may want to use later'
    }
  ];

  return (
    <>
      <Head title={'Samina Zafar'} />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
