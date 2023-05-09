/* eslint-disable no-unreachable */
import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        imperdiet arcu sem, ac imperdiet urna venenatis at. Praesent ac lacinia
        nulla, quis imperdiet orci. Nam sit amet mauris a nibh auctor faucibus
        in et ex. Sed sagittis at dolor nec molestie. Cras enim nisl, sodales
        vel semper eu, auctor nec massa. Nam id ligula a dolor posuere consequat
        non quis elit. In hac habitasse platea dictumst. Aenean malesuada ac mi
        non ullamcorper. Aliquam accumsan lectus tristique lorem fermentum, in
        ultrices dui rhoncus. Nulla nec pretium odio. Morbi semper molestie
        massa, vitae finibus sem venenatis sit amet. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Nulla tincidunt leo a mi vehicula,
        tempor pellentesque neque facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        imperdiet arcu sem, ac imperdiet urna venenatis at. Praesent ac lacinia
        nulla, quis imperdiet orci. Nam sit amet mauris a nibh auctor faucibus
        in et ex. Sed sagittis at dolor nec molestie. Cras enim nisl, sodales
        vel semper eu, auctor nec massa. Nam id ligula a dolor posuere consequat
        non quis elit. In hac habitasse platea dictumst. Aenean malesuada ac mi
        non ullamcorper. Aliquam accumsan lectus tristique lorem fermentum, in
        ultrices dui rhoncus. Nulla nec pretium odio. Morbi semper molestie
        massa, vitae finibus sem venenatis sit amet. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Nulla tincidunt leo a mi vehicula,
        tempor pellentesque neque facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        imperdiet arcu sem, ac imperdiet urna venenatis at. Praesent ac lacinia
        nulla, quis imperdiet orci. Nam sit amet mauris a nibh auctor faucibus
        in et ex. Sed sagittis at dolor nec molestie. Cras enim nisl, sodales
        vel semper eu, auctor nec massa. Nam id ligula a dolor posuere consequat
        non quis elit. In hac habitasse platea dictumst. Aenean malesuada ac mi
        non ullamcorper. Aliquam accumsan lectus tristique lorem fermentum, in
        ultrices dui rhoncus. Nulla nec pretium odio. Morbi semper molestie
        massa, vitae finibus sem venenatis sit amet. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Nulla tincidunt leo a mi vehicula,
        tempor pellentesque neque facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        imperdiet arcu sem, ac imperdiet urna venenatis at. Praesent ac lacinia
        nulla, quis imperdiet orci. Nam sit amet mauris a nibh auctor faucibus
        in et ex. Sed sagittis at dolor nec molestie. Cras enim nisl, sodales
        vel semper eu, auctor nec massa. Nam id ligula a dolor posuere consequat
        non quis elit. In hac habitasse platea dictumst. Aenean malesuada ac mi
        non ullamcorper. Aliquam accumsan lectus tristique lorem fermentum, in
        ultrices dui rhoncus. Nulla nec pretium odio. Morbi semper molestie
        massa, vitae finibus sem venenatis sit amet. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Nulla tincidunt leo a mi vehicula,
        tempor pellentesque neque facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        imperdiet arcu sem, ac imperdiet urna venenatis at. Praesent ac lacinia
        nulla, quis imperdiet orci. Nam sit amet mauris a nibh auctor faucibus
        in et ex. Sed sagittis at dolor nec molestie. Cras enim nisl, sodales
        vel semper eu, auctor nec massa. Nam id ligula a dolor posuere consequat
        non quis elit. In hac habitasse platea dictumst. Aenean malesuada ac mi
        non ullamcorper. Aliquam accumsan lectus tristique lorem fermentum, in
        ultrices dui rhoncus. Nulla nec pretium odio. Morbi semper molestie
        massa, vitae finibus sem venenatis sit amet. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Nulla tincidunt leo a mi vehicula,
        tempor pellentesque neque facilisis.
      </p>
    </div>
  );
}

export default ModalPage;
