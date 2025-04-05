import PropTypes from "prop-types";

function SectionHeader({ title, description }) {
  return (
    <div className="mb-10 px-4 lg:mb-20">
      <h2 className="text-xl font-bold text-white capitalize md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm text-white opacity-60 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SectionHeader;
