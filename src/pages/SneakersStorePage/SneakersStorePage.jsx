import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "../../components/Layout/Layout";
import { StoreContainer } from "../../containers/StoreContainer/StoreContainer";
import { loadBrandsIfNotExist } from "../../store/entities/brands/thunk/loadBrandsIfNotExist";
export const SneakersStorePage = () => {
  return (
    <Layout>
      <StoreContainer />
    </Layout>
  );
};
