import { useSelector } from "react-redux";
import { selectBrandByIdName } from "../../store/entities/brands/selectors";
import { BrandTab } from "../../components/BrandTab/BrandTab";
import { useParams } from "react-router-dom";
export const BrandTabContainer = ({ id }) => {
  const name = useSelector((state) => selectBrandByIdName(state, { id }));
  return <BrandTab name={name} brandId={id} />;
};
