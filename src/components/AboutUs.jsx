const AboutUs = () => {
  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold text-center mt-16 ">
        Mission Statement
      </h2>
      <div className="mx-44 mt-5 text-center p-2">
        <p>
          At Meeting Sync, out mission is to empower professionals and
          organizations by transforming the way they manage and utilize
          information form meetings. We leaverage cutting-edge technology to
          procide comprehensive, accuragek, and easily accessible meeting
          documentation that enhances productivity and deives effective
          decision-making.
        </p>
      </div>
      <div className="relative top-10 my-32 flex justify-center">
        <div className="p-10 w-2/3">
          <h3 className="font-bold text-xl">Technology Overvies</h3>
          <div>
            <p className="text-sm py-4">
              Meeting Sync leverages state-of-art AI technology to provide
              seamless and efficient meeting transcription and management. Out
              advanced algorithms accurately transcribe audio and video
              recordings in real-time, supporting multiple languages and
              dialects. With the ability to recoginize and differentiate between
              speakers, out system captures every detail of your discussions.
            </p>
            <h4 className="font-bold py-2 text-xl">Key Features:</h4>
            <ul>
              <li className="py-1">- Accurate Transcriptions</li>
              <li>- Multi_labguage support</li>
              <li className="py-1">- speaker Identification</li>
              <li>- Action Item and Note Extraction</li>
              <li className="py-1">- Secure Data handling</li>
            </ul>
            <p className="py-3 text-sm">
              Experience the power of AI-driven technology with Meeting Sync and
              transform the way you manage your meetings.
            </p>
          </div>
        </div>
        <div className=" flex justify-center">
          <img
            src="/Tech2.png"
            className="p-5 relative top-1/6 border-none rounded-sm overflow-hidden h-1/2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
