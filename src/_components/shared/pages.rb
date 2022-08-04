# frozen_string_literal: true

class Shared::Pages < Bridgetown::Component
  def initialize(data:, metadata:, resource:)
    @data, @metadata, @resource = data, metadata, resource
  end
end
