import React from 'react'
import { Container } from 'react-bootstrap'
import ProfileDetails from './ProfileDetails'
import ProfileOrdes from './ProfileOrdes'

export default function Profile() {
    return (
        <div>
            <ProfileDetails />
            <ProfileOrdes />
        </div>
    )
}
