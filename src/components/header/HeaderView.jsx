

import FixedHeader from './FixedHeader';
import MainHeader from './MainHeader';

import './HeaderView.scss';

function HeaderView() {
    return (
        <header>
            <MainHeader/>
            <FixedHeader/>
            {/* <div className="header-main-sticky">
                <NewHeaderSticky />
            </div> */}
        </header>
    )
}

export default HeaderView;