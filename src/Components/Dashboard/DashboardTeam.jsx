import { GoPlus } from 'react-icons/go';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const DashboradTeam = () => {
  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="flex items-center gap-2 text-4xl">
            <HiOutlineUserGroup />
            Team
          </h1>
          <Link
            to={'/dashboard/brands/create-brand'}
            className="flex text-lg bg-green-500 font-medium items-center justify-center text-white py-1 px-2 gap-1 transition-all duration-300 hover:bg-green-400 cursor-pointer"
          >
            <GoPlus className="text-xl" /> Add Member
          </Link>
        </div>
        <p
          className="w-96 mb-7"
          style={{ color: 'var(--black-primary-terms)' }}
        >
          Store all your member assets in one place. This will help you save
          time when submitting new requests.
        </p>
        <div>
          <h3 className="text-xl flex justify-start items-end">
            members
            <IoMdArrowDropright className="transition-all duration-300 text-2xl rotate-90 text-green-500" />
          </h3>
        </div>
        <div className="grid gap-3 grid-cols-3">{/* <MemberCards /> */}</div>
      </div>
    </section>
  );
};

export default DashboradTeam;
