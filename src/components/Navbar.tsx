import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // MUI icon for question mark

export default function Navbar() {
  const downloadResume = () => {
    return (
      <a
        href="/Resume_Justin_Ho.pdf"
        download="Justin_Ho_Resume.pdf"
        className="text-white bg-blue-800 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg"
      >
        Download Resume
      </a>
    )
  }

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Justin Ho
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700    flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>


        {downloadResume()}
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
        </a>

        <Tooltip title="This was built using an S3 Bucket with website hosting and a Cloudfront Distribution." arrow>
          <HelpOutlineIcon style={{ cursor: 'pointer', fontSize: '24px', color: '#555' }} />
        </Tooltip>

      </div>
    </header>
  );
}
