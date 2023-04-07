import { allBoards } from '@page/HomePage/components/HomePage';
import { HeaderButton, Modal } from '@shared/UI';
import { useAtom } from 'jotai';
import { FC, useState } from 'react';
import { CreateBoardModal } from './CreateBoardModal';

export const HomeHeader: FC = () => {
  const [data] = useAtom(allBoards);
  const [isModalOpen, setModalOpen] = useState({ target: '', state: false });

  return (
    <div className="flex h-full items-center justify-between">
      {/* Left part of header */}
      <div className="inline-flex flex-col">
        <span className="text-2xl font-black dark:text-zinc-200">
          All your board's
        </span>
        <span className=" text-gray-400">Total boards: {data.length}</span>
      </div>
      {/* Right part of header */}
      <div className="flex items-center space-x-3">
        <HeaderButton
          text="Create board"
          onClick={() => {
            setModalOpen({ target: 'create-board', state: true });
          }}
        />
        {/* <SearchBar
          placeholder="Search board"
          handlerFn={() => {
            console.log('test');
          }}
        /> */}
      </div>
      <Modal setOpen={setModalOpen} isOpen={isModalOpen.state}>
        {isModalOpen.target === 'create-board' && (
          <CreateBoardModal setOpen={setModalOpen} />
        )}
      </Modal>
    </div>
  );
};
