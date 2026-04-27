import { Notification } from '../types/game';

export const NotificationLog = ({ notifications }: { notifications: Notification[] }) => (
  <section className="panel notifications">
    <h3>Notifications</h3>
    <ul>
      {notifications.slice(0, 8).map((item) => (
        <li key={item.id}>{item.message}</li>
      ))}
    </ul>
  </section>
);
