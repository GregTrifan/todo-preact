import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  Switcher,
  SwitcherItem
} from "carbon-components-react";
import { Apps20 } from "@carbon/icons-react";
import { useState } from "preact/hooks";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Header>
      <HeaderName prefix="Lorem" href="/">
        Ipsum
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction onClick={() => setMenu(!menu)}>
          <Apps20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <HeaderPanel expanded={menu}>
        <Switcher>
          <SwitcherItem href="/stats/Bitcoin">Bitcoin Status</SwitcherItem>
          <SwitcherItem href="/stats/Ethereum">Ethereum Status</SwitcherItem>
          <SwitcherItem href="/stats/EOS">EOS Status</SwitcherItem>
        </Switcher>
      </HeaderPanel>
    </Header>
  );
};
export default Navbar;
