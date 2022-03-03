import PropTypes from 'prop-types';
import { useState, useHistory } from 'react-router-dom';

import Button from 'components/atoms/Button/Button';
import Header from 'components/atoms/Header/Header';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, CloseButton, ButtonWrapper, FormWrapper } from './styled';
import { base } from 'airtable/base';
import withContext from 'hoc/withContext';

import EditForm from 'components/molecules/Forms/EditForm';

// czy pageContext jest wykorzystywany?

const EditPopup = ({ closeEditPopup, itemData, pageContext }) => {
  const id = itemData.id;
  console.log('Edit Popup ID', id);

  //TU CHYBA POWINIEN BYĆ EDIT BUTTON ROBIACY UPDATE DO BASE AIRTABLE
  // const EditButton = () => {
  //   const updadeItem = () => {
  //     base('books').update(
  //       [
  //         {
  //           id: 'rec24RKPoPNjm08nf',
  //           fields: {
  //             title: 'Kirke',
  //             content:
  //               'Epicka opowieść oparta na motywach mitologicznych, autorstwa zdonywczyni nagrody Orange.\nW domu Heliosa, boga słońca i najpotężniejszego z tytanów, ro...',
  //             imageUrl: 'https://s.lubimyczytac.pl/upload/books/4848000/4848055/661645-170x243.jpg',
  //             status: 'read',
  //             firstName: 'Madeline',
  //             numberOfPages: 414,
  //             date: '2018-01-20',
  //             translation: 'Paweł Korombel',
  //             publishing: 'Albatros',
  //             isbn: 9788381253048,
  //             series: 'Seria butikowa',
  //             LClink: 'https://lubimyczytac.pl/ksiazka/4848055/kirke',
  //             lastName: 'Miller',
  //           },
  //         },
  //       ],
  //       function (err, records) {
  //         if (err) {
  //           console.error(err);
  //           return;
  //         }
  //         records.forEach(function (record) {
  //           console.log(record.get('title'));
  //         });
  //       },
  //     );
    // }
    // }  




  return (
    <StyledWrapper>
      <Header secondary>Edit item</Header>
      <CloseButton icon={closeIcon} onClick={closeEditPopup} />
      <FormWrapper>
       <EditForm itemData={itemData}/>
      </FormWrapper>
      <ButtonWrapper>
        {/* <EditButton>Edit item</EditButton> */}
        <Button>Saved Data</Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

  // const DeleteButton = () => {
  //   const history = useHistory();
  //   const deleteItem = () => {
  //     base(pageContext).update(id, function (err, deleteItem) {
  //       if (err) {
  //         console.error(err);

  //         return;
  //       }
  //       return (
  //         console.log('Deleted record with id', id),
  //         (<> {pageContext !== 'quotes' && history.goBack()}</>)
  //       );
  //     });
  //   };
  //   return (
  //     <div className="position-absolute">
  //       <Button type="submit" icon={trashIcon} onClick={deleteItem}>
  //         Yes
  //       </Button>
  //     </div>
  //   );
  // };

 

EditPopup.propTypes = {
  handleDeleteTrue: PropTypes.func,
  handleDeleteFalse: PropTypes.func,
  itemData: PropTypes.object.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'note', 'quotes']),
  closeEditPopup: PropTypes.func,
};

export default withContext(EditPopup);
