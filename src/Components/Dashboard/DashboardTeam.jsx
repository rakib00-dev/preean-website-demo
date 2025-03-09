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
            to={'#'}
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
        <div className="grid gap-3 place-items-center">
          <MemberCards />
        </div>
      </div>
    </section>
  );
};

export default DashboradTeam;

const MemberCards = () => {
  return (
    <form class="max-w-sm mx-auto bg-gray-100 shadow-2xl p-6 rounded-lg">
      <h2 className="text-2xl mb-3">Add your team member via email</h2>
      <div class="mb-5">
        <label for="email" class="block mb-2 font-medium text-gray-90 text-sm">
          Name
        </label>
        <input
          type="text"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   "
          placeholder="Mr. Design Pro"
          required
        />
      </div>
      <div class="mb-5">
        <label for="email" class="block mb-2 font-medium text-gray-90 text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   "
          placeholder="name@designpro.com"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          class="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
