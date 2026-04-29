import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-violet-600">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg text-center">
          Assalamu Alaikum! I'm <span className="font-semibold">Md. Asaduszaman Mia</span>.
          A passionate CSE student, Digital Marketer, and Content Creator.
        </p>

        {/* Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-500">
            Who Am I?
          </h2>
          <p className="text-gray-600">
            I am currently studying Computer Science & Engineering. Alongside my studies,
            I work as a professional Digital Marketer, Video Editor, and Graphic Designer.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-500">
            My Skills
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Web Development (React, Next.js)</li>
            <li>Digital Marketing</li>
            <li>Video Editing</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-500">
            What I Do
          </h2>
          <p className="text-gray-600">
            I create educational and Islamic content on YouTube to help others.
            I also work on real-world projects to improve my development skills.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center pt-6">
          <h2 className="text-xl font-semibold text-violet-500">
            Contact Me
          </h2>
          <p className="text-gray-600">
            Feel free to reach out for collaboration or any queries!
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;