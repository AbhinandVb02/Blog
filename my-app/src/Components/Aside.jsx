import React, { useContext } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import { newcontext } from '../App';
import { Link } from 'react-router-dom';

function Aside() {

    const [BlogData] = useContext(newcontext);


    const AsideMapData = BlogData.filter((element, index) => index < 5)

    const brandfilter = []

    BlogData.forEach((item) => {
        if (!brandfilter.includes(item.Catagories)) {
            brandfilter.push(item.Catagories);
        }
    });

    console.log(brandfilter);

    return (
        <div className='Aside-header'>
            <span className='content-maindiv-span'>
                <p>Social Media</p>
                <hr />
            </span>
            <div className='Asidediv'>
                <span className='Asidediv-span1'>
                    <FaFacebookF size={30} />
                    <p>22.2k</p>
                    <p>Followers</p>
                </span>
                <span className='Asidediv-span2'>
                    <BsGoogle size={30} />
                    <p>22.2k</p>
                    <p>Followers</p></span>
                <span className='Asidediv-span3'>
                    <BsTwitter size={30} />
                    <p>22.2k</p>
                    <p>Followers</p>
                </span>
            </div>

            <div className='asideDiv2'>
                <span className='content-maindiv-span'>
                    <p>Tags</p>
                    <hr />
                </span>
                <div className='Aside-category'>
                    <MDBTable striped>
                        <MDBTableBody>
                            {brandfilter.map((data) => {
                                return (
                                    <tr>
                                        <th>{data}</th>
                                    </tr>
                                )
                            })}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>

            <div className='aside-card-main'>
                <span className='content-maindiv-span'>
                    <p>Popular Post</p>
                    <hr />
                </span>
                {AsideMapData.map((data) => {
                    return (
                        <Link className='linkstyle' to={`/userhome/${data._id}`}>
                            <div className='aside-card'>
                                <div className='aside-carddiv1'>
                                    <img src={data.Images} alt="" />
                                </div>
                                <div className='aside-carddiv2'>
                                    <p>{data.Catagories}</p>
                                    <h4>{data.Name}</h4>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Aside