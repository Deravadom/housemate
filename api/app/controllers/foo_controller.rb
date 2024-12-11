class FooController < ApplicationController
    def execute
        render json: { status: 200, ok: true, data: { foo: "bar"}}
    end
end
