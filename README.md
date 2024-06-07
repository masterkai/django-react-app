# django-react-app
1. In the codespace terminal, run the following commands:

    ```shell
    # Install requirements
    python3 -m pip install -r requirements.txt
    # Run database migrations
    python3 manage.py migrate
    # Start the development server
    python3 manage.py runserver
    ```
2. If you'd like to access `/admin`, you'll need a Django superuser. Navigate to the Azure Portal for the App Service, select SSH, and run this command:

    ```shell
    python3 manage.py createsuperuser
    ```