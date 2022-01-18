import React from 'react'

const BgAnimation = ({ text }) => {
    return (
        <div>
            <style jsx>{`
                .animate-charcter
                {
                   text-transform: capitalize;
                   background-image: linear-gradient(
                    -225deg,
                    #231557 0%,
                    #44107a 29%,
                    #ff1361 67%,
                    #fff800 100%
                  );
                  background-size: auto auto;
                  background-clip: border-box;
                  background-size: 200% auto;
                  color: #fff;
                  background-clip: text;
                  text-fill-color: transparent;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  animation: textclip 4s linear infinite;
                  display: inline-block;
                  font-size: 3rem;
                  margin: 0;
                  padding: 0;
                }

                @media screen and (max-width: 900px) {
                    .animate-charcter{
                        font-size: 2rem;
                    }
                }
                @media screen and (max-width: 780px) {
                    .animate-charcter{
                        font-size: 1.5rem;
                    }
                }
                
                @keyframes textclip {
                  from {
                    background-position: 200% center;
                  }
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="animate-charcter">{text}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BgAnimation