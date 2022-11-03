import { useSelector } from "react-redux";
import { selectBrandById } from "../../store/entities/brands/selectors";
import { BrandTab } from "../../components/BrandTab/BrandTab";
export const BrandTabContainer = ({ id }) => {
  const name = useSelector((state) => selectBrandById(state, { id }));
  return <BrandTab name={name} />;
};
