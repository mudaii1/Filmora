import { memo } from "react";
import CategorySlider from "./CategorySlider";
import SectionHeader from "./SectionHeader";

const MovieCategories = memo(function MovieCategories({
  children,
  title,
  description,
}) {
  return (
    <section className="py-25 lg:py-50">
      <SectionHeader title={title} description={description} />
      <CategorySlider>{children}</CategorySlider>
    </section>
  );
});

export default MovieCategories;
