import styles from "./RotaryBox.module.scss";

const Box = () => (
  <>
    <div className={styles.wrapper}>
      <article className={styles.article}>
        <div className={styles.boxFront}>
          <div className={styles.text}>
            <h1>I heave read</h1>
          </div>
        </div>
        <div className={styles.boxBack}>
          <div className={styles.text}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum
              facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
          </div>
        </div>
      </article>

      <article className={styles.article}>
        <div className={styles.boxFront}>
          <div className={styles.text}>
            <h1>Want to read</h1>
          </div>
        </div>
        <div className={styles.boxBack}>
          <div className={styles.text}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum
              facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
          </div>
        </div>
      </article>

      <article className={styles.article}>
        <div className={styles.boxFront}>
          <div className={styles.text}>
            <h1>I want to buy</h1>
          </div>
        </div>
        <div className={styles.boxBack}>
          <div className={styles.text}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum
              facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
          </div>
        </div>
      </article>
    </div>
  </>
);

export default Box;






// const StyledWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
// `;

// const StyledParagraph = styled.p`
//   line-height: 1.9em;
//   font-size: 1em;
// `;

// const StyledHeader = styled.h1`
//   font-size: 1.4rem;
//   font-weight: 700;
//   display: inline-block;
//   vertical-align: middle;
//   color: #ff0066;

//   &:before {
//     display: block;
//     width: 80px;
//     height: 80px;
//     margin: 0 auto 0.7rem;
//     content: '';
//     background-size: contain;
//     background-position: center;
//     background-image: url(${bookIcon});
//   }
// `;

// const StyledArticle = styled.article`
//   width: 300px;
//   height: 400px;
//   margin: 0 1rem;
//   color: #fff;
//   perspective: 1000px;
//   position: relative;
//   text-align: center;
// `;

// const StyledBoxFront = styled.div`
//   transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
//   backface-visibility: hidden;
//   overflow: hidden;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 300px;
//   height: 400px;
//   position: absolute;
//   z-index: 2;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   transform: rotateY(0deg);
//   background-size: cover;
//   background-position: center;
//   background-color: hsl(0, 0%, 18%);
//   background-blend-mode: overlay;

//   &:hover {
//     transform: rotateY(-180deg);
//   }

//   &:nth-child(1) {
//     background-image: url(${book1});
//   }
// `;

// const StyledBoxBack = styled.div`
//   transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
//   backface-visibility: hidden;
//   overflow: hidden;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 300px;
//   height: 400px;
//   transform: rotateY(180deg);
//   background: ${({ theme }) => theme.colors.lipstick};
//   position: relative;
//   z-index: 1;

//   &:hover {
//     transform: rotateY(0deg);
//   }
// `;

// const StyledText = styled.div`
//   transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.5s linear;
//   opacity: 0
//     ${({ front }) =>
//       front &&
//       css`
//         transform: translate3d(0, 0, 0);
//         opacity: 1;

//         &:hover {
//           transform: translate3d(-200%, 0, 0);
//           opacity: 0;
//         }
//       `};

//   ${({ back }) =>
//     back &&
//     css`
//       padding: 0 1.7rem;
//       transform: translate3d(80%, 0, 0);

//       &:hover {
//         transform: translate3d(0, 0, 0);
//         opacity: 1;
//       }
//     `}
// `;

// const RotaryBox = () => (
//   <>
//     <StyledWrapper>
//       <StyledArticle>
//         <StyledBoxFront>
//           <StyledText front>
//             <StyledHeader>I have read</StyledHeader>
//           </StyledText>
//         </StyledBoxFront>
//         <StyledBoxBack>
//           <StyledText back>
//             <StyledParagraph>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum
//               facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
//             </StyledParagraph>
//           </StyledText>
//         </StyledBoxBack>
//       </StyledArticle>
//     </StyledWrapper>
//   </>
// );

// export default RotaryBox;
