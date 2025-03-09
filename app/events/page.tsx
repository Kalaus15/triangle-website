import events from "@/data/events.json";

export default function EventsPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-[#7f0000]">Upcoming Events</h1>
      <p className="text-gray-700 mt-4">Check out our upcoming events!</p>

      <div className="mt-6 space-y-6">
        {events.map((event, index) => (
          <div key={index} className="p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#7f0000]">{event.title}</h2>
            <p className="text-gray-600 mt-1">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-gray-600">
              <strong>Time:</strong> {event.time}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
