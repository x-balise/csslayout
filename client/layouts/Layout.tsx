import React, { useEffect } from 'react';

import SampleCode from '../components/SampleCode';
import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ margin: '0 auto 64px auto', maxWidth: '1024px' }}>
            {children}
            <Footer />
            <div
                style={{
                    backgroundColor: '#282828',
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        alignItems: 'flex-end',
                        color: '#FFF',
                        display: 'flex',
                        flexDirection: 'column',
                        fontWeight: 700,
                        justifyContent: 'center',
                        padding: '32px',
                        textTransform: 'uppercase',
                    }}
                >
                    <div style={{ fontSize: '48px' }}>How</div>
                    <div style={{ fontSize: '70px' }}>it's</div>
                    <div style={{ fontSize: '42px' }}>made</div>
                </div>
                <div style={{ flex: 1, padding: '32px' }}>
                    <SampleCode
                        lang='javascript'
                        code={`
this
    .madeWith([react,typescript])
    .then((r) => lint(r))                           /* tslint */
    .then((r) => lazyLoad(r))                       /* @loadable/component */
    .then((r) => optimizeAndBundle(r))              /* webpack */
    .then((r) => exportHtml(r))                     /* react-snap */
    .then((r) => deploy(r))                         /* Netlify */
    .then((r) => {
        expect(r).is(scalableCode);
        expect(r).is(superFastWebsite);
        expect(r).is(seoFriendly);
    })
`}
                    />
                    <div
                        className="hljs"
                        style={{
                            lineHeight: 1.5,
                            listStyleType: 'none',
                            marginTop: '-16px',
                            paddingLeft: '40px',
                        }}
                    >
                        .finally(
                        <span className="hljs-function"><span className="hljs-params">()</span> => </span>
                        &#123;
                        <span className="hljs-comment">
                            <a
                                href="https://github.com/phuoc-ng/csslayout"
                                style={{ color: 'currentColor', textDecoration: 'none' }}
                            >
                                &#47;* Give me 1 Github star here */
                            </a>
                        </span>
                        }) 🎉
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;