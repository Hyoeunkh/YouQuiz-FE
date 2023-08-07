import PageTemplate from "../../component/auth/PageTemplate";
import RegisterForm from "../../containers/auth/RegisterForm"

const UserInfoPage = () => {
	return (
        <>
            <PageTemplate >
                <RegisterForm />
            </PageTemplate>
        </>
    );
}

export default UserInfoPage;