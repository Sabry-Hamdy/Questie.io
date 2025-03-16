import FeatureContainer from '../components/FeatureContainer';
import FeatureHeader from '../components/FeatureHeader';
import CrystalFooter from '../features/Crystal/CrystalFooter';
import CrystalButtons from '../features/Crystal/CrystalButtons';
import Crystal from '../features/Crystal/Crystal';

export default function CrystalPage() {
  return (
    <FeatureContainer>
      <FeatureHeader
        headText="Time Crystal"
        bodyText="Focus your magical energies"
      />

      <Crystal />

      <CrystalButtons />

      <CrystalFooter />
    </FeatureContainer>
  );
}
