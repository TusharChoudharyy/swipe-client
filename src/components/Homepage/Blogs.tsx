// @ts-nocheck
// src/components/Blog.jsx

const blogPosts = [
  {
    title: "How SwipeMedia Scales DTC Brands with UGC",
    description:
      "A behind-the-scenes look at how we helped triple ROAS using user-generated content and creative testing.",
    date: "July 5, 2025",
    image: "/assets/blog1.jpg",
  },
  {
    title: "5 Ways to Improve Ad Creatives",
    description:
      "Quick wins to improve your paid social performance using better visuals, CTAs, and hooks.",
    date: "June 28, 2025",
    image: "/assets/blog2.jpg",
  },
  {
    title: "LinkedIn Content That Converts",
    description:
      "Swipe's approach to building authority and inbound leads through thought-leader content at scale.",
    date: "June 15, 2025",
    image: "/assets/blog3.jpg",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        From the Blog 📝
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="mt-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
